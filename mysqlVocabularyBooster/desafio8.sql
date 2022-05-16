SELECT 
    c.contactname AS 'Nome de contato',
    s.shippername AS 'Empresa que fez o envio',
    o.orderdate AS 'Data do pedido'
FROM
    w3schools.orders AS o
        INNER JOIN
    shippers AS s ON s.shipperid = o.shipperid
        INNER JOIN
    customers AS c ON c.customerid = o.customerid
WHERE
    s.shippername in ('United Package', 'Speedy Express')
ORDER BY `Nome de contato`, `Empresa que fez o envio`, `Data do pedido`;
