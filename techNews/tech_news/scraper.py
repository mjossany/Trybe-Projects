import requests
import math
import time
from parsel import Selector
from tech_news.database import create_news


# Requisito 1
def fetch(url):
    try:
        response = requests.get(url, timeout=1)
        time.sleep(1)
        response.raise_for_status()
    except requests.HTTPError:
        return None
    except requests.Timeout:
        return None
    else:
        return response.text


# Requisito 2
def scrape_novidades(html_content):
    selector = Selector(html_content)
    news_links = selector.css(
        "h3 a.tec--card__title__link::attr(href)"
        ).getall()
    return news_links


# Requisito 3
def scrape_next_page_link(html_content):
    selector = Selector(html_content)
    next_page_url = selector.css(
        "a.z--mx-auto::attr(href)"
        ).get()

    if next_page_url is None:
        return None

    return next_page_url


# Requisito 4
def scrape_noticia(html_content):
    selector = Selector(html_content)
    url = selector.css('meta[property="og:url"]').xpath('@content').get()
    title = selector.css("h1.tec--article__header__title::text").get()
    timestamp = selector.css("time#js-article-date::attr(datetime)").get()
    writer = (selector.css('.z--font-bold *::text').get() or '').strip()

    shares_count = int((selector.css(
        "div.tec--toolbar__item::text").re_first(r"\d") or 0
        ))
    comments_count = int((selector.css(
        "#js-comments-btn::attr(data-count)").get() or 0
    ))
    summary = ''.join(selector.css(
        'div.tec--article__body > p:nth-of-type(1) *::text'
    ).getall())
    sources_unformatted = selector.css(
        "div.z--mb-16 a::text"
    ).getall()
    sources = []
    for source in sources_unformatted:
        source_formatted = source.strip()
        sources.append(source_formatted)
    categories_unformatted = selector.css("div#js-categories a::text").getall()
    categories = []
    for categorie in categories_unformatted:
        categorie_formatted = categorie.strip()
        categories.append(categorie_formatted)

    return {
        "url": url,
        "title": title,
        "timestamp": timestamp,
        "writer": writer,
        "shares_count": shares_count,
        "comments_count": comments_count,
        "summary": summary,
        "sources": sources,
        "categories": categories,
    }


# Requisito 5
def get_tech_news(amount):
    url_to_fetch = 'https://www.tecmundo.com.br/novidades'
    quantity_of_pages_to_fetch = math.ceil(amount / 20)
    page = 1
    news_links_to_scrape = []

    while page <= quantity_of_pages_to_fetch:
        content = fetch(url_to_fetch)
        page_news_links = scrape_novidades(content)
        news_links_to_scrape += page_news_links
        url_to_fetch = scrape_next_page_link(content)
        page += 1

    links_to_scrape = []
    links_to_scrape = news_links_to_scrape[:amount]

    data_news = []

    for link in links_to_scrape:
        content = fetch(link)
        data = scrape_noticia(content)
        data_news.append(data)

    create_news(data_news)

    return data_news
