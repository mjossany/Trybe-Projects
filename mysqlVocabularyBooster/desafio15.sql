use hr;
DELIMITER $$

CREATE PROCEDURE buscar_media_por_cargo (in job varchar(100))
BEGIN
SELECT 
round(AVG(salary), 2) AS 'Média salarial'
FROM 
hr.employees
WHERE job_id =
(SELECT 
  job_id 
FROM 
  hr.jobs 
WHERE 
  job_title = job
);
END $$
DELIMITER ;

call ShowSallaryAvgPerJobs('Programmer');
