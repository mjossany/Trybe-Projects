DELIMITER $$
CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(month int, year int)
RETURNS INT
READS SQL DATA
BEGIN
DECLARE quantity_hired INT;
SELECT COUNT(*)
FROM hr.employees
WHERE MONTH(HIRE_DATE) = month AND YEAR(HIRE_DATE) = year into quantity_hired;
RETURN quantity_hired;
END $$
DELIMITER ;
