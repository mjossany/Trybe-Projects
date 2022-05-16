SELECT 
    CONCAT(first_name, ' ', last_name) AS 'Nome completo',
    job_title AS 'Cargo',
    start_date AS 'Data de início do cargo',
    department_name AS 'Departamento'
FROM
    hr.job_history AS jh
        INNER JOIN
    hr.departments AS d ON d.DEPARTMENT_ID = jh.DEPARTMENT_ID
        INNER JOIN
    hr.jobs AS j ON j.job_id = jh.JOB_ID
        INNER JOIN
    hr.employees AS e ON e.employee_id = jh.EMPLOYEE_ID
ORDER BY `Nome Completo` DESC , `Cargo`;
