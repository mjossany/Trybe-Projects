DELIMITER $$
CREATE PROCEDURE albuns_do_artista(IN artista_nome VARCHAR(30)) 
BEGIN
SELECT artista_name AS 'artista', album_name AS 'album'
    FROM albuns AS ab
    INNER JOIN artistas AS a ON a.artista_id = ab.artista_id
    WHERE artista_name = artista_nome;
END $$
DELIMITER ;
