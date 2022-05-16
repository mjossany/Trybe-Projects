CREATE VIEW cancoes_premium AS
SELECT musica_name AS 'nome', COUNT(DISTINCT(uhr.musica_id)) AS 'reproducoes'
FROM usuario_historico_reproducoes AS uhr
INNER JOIN musicas AS m ON m.musica_id = uhr.musica_id
WHERE usuario_id in (
SELECT usuario_id
    FROM usuarios AS u
    INNER JOIN planos AS p ON p.plano_id = u.plano_id
    WHERE tipo in ('familiar', 'universitário')
)
GROUP BY `nome`
ORDER BY `nome`;
