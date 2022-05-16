CREATE VIEW perfil_artistas AS
SELECT 
    (SELECT 
            artista_name
        FROM
            artistas AS a
        WHERE
            ab.artista_id = a.artista_id) AS 'artista',
    album_name AS 'album',
    COUNT(uas.artista_id) AS 'seguidores'
FROM
    usuario_artistas_seguidos AS uas
        INNER JOIN
    albuns AS ab ON ab.artista_id = uas.artista_id
GROUP BY ab.album_id
ORDER BY `seguidores` DESC, `artista`;
