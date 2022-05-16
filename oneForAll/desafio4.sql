CREATE VIEW top_3_artistas AS
SELECT artista_name AS 'artista', COUNT(uas.artista_id) AS 'seguidores'
FROM artistas AS a
INNER JOIN usuario_artistas_seguidos AS uas ON uas.artista_id = a.artista_id
GROUP BY uas.artista_id
ORDER BY `seguidores` DESC, `artista`
LIMIT 3;
