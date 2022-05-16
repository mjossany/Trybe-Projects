SELECT 
    CONCAT(firstname, ' ', lastname) AS 'Nome completo',
    COUNT(orderid) AS 'Total de pedidos'
FROM
    w3schools.employees AS e
        INNER JOIN
    w3schools.orders AS o ON o.employeeid = e.employeeid
GROUP BY `Nome Completo`
ORDER BY `Total de pedidos`;
