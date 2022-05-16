DELIMITER $$
CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON usuarios
FOR EACH ROW

BEGIN
DELETE FROM usuario_artistas_seguidos WHERE usuario_id = OLD.usuario_id;
DELETE FROM usuario_historico_reproducoes WHERE usuario_id = OLD.usuario_id;	
END $$
DELIMITER ;
