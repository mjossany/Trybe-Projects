DELIMITER $$
CREATE TRIGGER trigger_data_insert
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
SET NEW.OrderDate = CURRENT_DATE();
END $$
DELIMITER ;
