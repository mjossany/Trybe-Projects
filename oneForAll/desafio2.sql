CREATE VIEW estatisticas_musicais AS
SELECT COUNT(musica_name) AS 'cancoes', COUNT(DISTINCT(artista_id)) AS 'artistas', COUNT(DISTINCT(album_id)) AS 'albuns' 
FROM musicas;
