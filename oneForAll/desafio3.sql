CREATE VIEW historico_reproducao_usuarios AS
SELECT nome_usuario AS 'usuario', musica_name AS 'nome'
FROM usuarios AS u
INNER JOIN usuario_historico_reproducoes AS uhr ON uhr.usuario_id = u.usuario_id 
INNER JOIN musicas AS m ON m.musica_id = uhr.musica_id
ORDER BY `usuario`, `nome`;
