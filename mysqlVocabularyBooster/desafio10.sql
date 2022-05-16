SELECT 
    productname AS 'Produto',
    MIN(quantity) AS 'Mínima',
    MAX(quantity) AS 'Máxima',
    ROUND(AVG(quantity), 2) AS 'Média'
FROM
    w3schools.products AS p
        INNER JOIN
    w3schools.order_details AS od ON od.ProductID = p.ProductID
GROUP BY `Produto`
HAVING `Média` > 20
ORDER BY `Média`, `Produto`;
