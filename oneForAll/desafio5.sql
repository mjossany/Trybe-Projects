CREATE VIEW top_2_hits_do_momento AS
SELECT musica_name AS 'cancao', COUNT(uhr.musica_id) AS 'reproducoes'
FROM musicas AS m
INNER JOIN usuario_historico_reproducoes AS uhr ON uhr.musica_id = m.musica_id
GROUP BY `cancao`
ORDER BY `reproducoes` DESC, `cancao`
LIMIT 2;
