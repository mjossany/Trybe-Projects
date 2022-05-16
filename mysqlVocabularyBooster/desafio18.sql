SELECT 
    CONCAT(FIRST_NAME, ' ', LAST_NAME) AS 'Nome completo',
    DATE_FORMAT(START_DATE, '%d/%m/%Y') AS 'Data de início',
    DATE_FORMAT(END_DATE, '%d/%m/%Y') AS 'Data de rescisão',
    ROUND((DATEDIFF(END_DATE, START_DATE) / 365),
            2) AS 'Anos trabalhados'
FROM
    hr.employees AS e
        INNER JOIN
    hr.job_history AS jh ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
ORDER BY `Nome completo`, `Anos trabalhados`;
