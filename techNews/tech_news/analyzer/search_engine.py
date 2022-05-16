import tech_news.database as db
import datetime
import re


# Requisito 6
def search_by_title(title):
    title_case_incensitive = re.compile(title, re.IGNORECASE)
    news = db.search_news({'title': title_case_incensitive})

    return [
        (new['title'], new['url'])
        for new in news
    ]


# Requisito 7
# Solução feita pelo Roberval Filho
#  https://github.com/tryber/sd-012-tech-news/blob/eba49852a58ffc6284d8eaf253ba8bd7f9315b8c/tech_news/analyzer/search_engine.py
def search_by_date(date):
    splitted_date = date.split('-')

    try:
        datetime.datetime(
            year=int(splitted_date[0]),
            month=int(splitted_date[1]),
            day=int(splitted_date[2])
        )
    except ValueError:
        raise ValueError('Data inválida')

    regex = re.compile(f'^{date}')
    news = db.search_news({"timestamp": regex})

    return [
        (item['title'], item['url'])
        for item in news
    ]


# Requisito 8
def search_by_source(source):
    source_case_incensitive = re.compile(source, re.IGNORECASE)
    news = db.search_news({"sources": source_case_incensitive})

    return [
        (new['title'], new['url'])
        for new in news
    ]


# Requisito 9
def search_by_category(category):
    category_case_incensitive = re.compile(category, re.IGNORECASE)
    news = db.search_news({"categories": category_case_incensitive})
    return [
        (new['title'], new['url'])
        for new in news
    ]
