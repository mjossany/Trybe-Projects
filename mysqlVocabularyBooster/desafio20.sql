DELIMITER $$
CREATE PROCEDURE exibir_historico_completo_por_funcionario(email VARCHAR(100))
BEGIN
SELECT 
    CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
    d.DEPARTMENT_NAME AS 'Departamento',
    j.JOB_TITLE AS 'Cargo'
FROM
    hr.employees AS e
        INNER JOIN
    hr.job_history AS jh ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
        INNER JOIN
    hr.departments AS d ON d.DEPARTMENT_ID = jh.DEPARTMENT_ID
        INNER JOIN
    hr.jobs AS j ON j.JOB_ID = jh.JOB_ID
WHERE
    e.EMAIL = email
ORDER BY `Departamento`, `Cargo`;
END $$
DELIMITER ;
