SELECT 
    c.country_name AS 'País',
    IF(c.region_id = 1,
        'incluído',
        'não incluído') AS 'Status Inclusão'
FROM
    hr.countries AS c
        INNER JOIN
    hr.regions AS r ON c.region_id = r.region_id
order by c.country_name;
