DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(100))
RETURNS INT
READS SQL DATA
BEGIN
DECLARE jobs_total INT;
SELECT COUNT(e.employee_id) 
FROM hr.job_history AS jh
INNER JOIN hr.employees AS e ON e.employee_id = jh.employee_id
WHERE e.email = email into jobs_total;
RETURN jobs_total;
END $$
DELIMITER ;
