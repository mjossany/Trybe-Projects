DELIMITER $$
CREATE FUNCTION quantidade_musicas_no_historico(user_id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE rep_total INT;
    SELECT COUNT(DISTINCT(musica_id))
    FROM usuario_historico_reproducoes
    WHERE usuario_id = user_id INTO rep_total;
    RETURN rep_total;
END $$
DELIMITER ;
