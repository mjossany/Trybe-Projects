(SELECT 
    country as 'País'
FROM
    w3schools.customers) UNION (SELECT 
    country
FROM
    w3schools.suppliers) ORDER BY `País` LIMIT 5;
