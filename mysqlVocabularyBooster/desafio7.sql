SELECT 
UCASE(CONCAT(first_name, ' ', last_name)) as 'Nome completo',
    start_date AS 'Data de início',
    salary AS 'Salário'
FROM
    hr.job_history AS jh
        INNER JOIN
    hr.employees AS e ON e.employee_id = jh.employee_id
WHERE MONTH(start_date) in (01, 02, 03)
ORDER BY `Nome Completo`, `Data de início`;
