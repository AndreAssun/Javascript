CREATE DATABASE bancolivros;
USE bancolivros;

CREATE TABLE `livro` (
  `idlivro` int(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `genero` varchar(50) NOT NULL,
  `sinopse` text NOT NULL,
  `precoatual` decimal(10,2) NOT NULL,
  `foto1` varchar(255) NOT NULL,
  `foto2` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `livro`
--

INSERT INTO `livro` (`idlivro`, `titulo`, `autor`, `genero`, `sinopse`, `precoatual`, `foto1`, `foto2`) VALUES
(1, '#umdiasemreclamar: Descubra por que a gratidão pode mudar a sua vida', 'Marcelo Galuppo', 'autoajuda', 'DESCUBRA O PODER DA GRATIDÃO E MUDE A SUA VIDA EM 24 HORAS Quantas vezes você reclamou de algo hoje? Já parou pra pensar como é difícil ser grato e como focamos muito mais a nossa atenção nos problemas e não nas soluções? Este livro lhe propõe o seguinte desafio: passe um dia (24 horas) sem reclamar. Para realizá-lo, você precisará registrar o horário em que iniciará o exercício. E não será preciso registrar quantas vezes você viola seu comando porque, a cada vez que você o fizer, deverá reiniciar a contagem do tempo. Segundo os autores, a principal função deste exercício é tornar-nos conscientes de que a ingratidão é o padrão natural do ser humano. Além dele, você encontrará aqui mais seis exercícios de gratidão e mudará para sempre a maneira como encara os seus problemas.', 21.99, 'https://m.media-amazon.com/images/I/619T0W3tfuL._SL1360_.jpg', 'https://m.media-amazon.com/images/I/61WJWJncLjL._SL1360_.jpg'),
(2, 'É Assim que Acaba', 'Colleen Hoover (Autor), Priscila Catão (Tradutor)', 'Ficção', 'Considerado o livro do ano, que virou febre no TikTok e sozinho já acumulou mais de um milhão de exemplares vendidos no Brasil. É assim que acaba é o romance mais pessoal da carreira de Colleen Hoover, discutindo temas como violência doméstica e abuso psicológico de forma sensível e direta. Em É assim que acaba , Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela.Quando os dois se apaixonam, Lily se vê no meio de um relacionamento turbulento que não é o que ela esperava. Mas será que ela conseguirá enxergar isso, por mais doloroso que seja?É assim que acaba é uma narrativa poderosa sobre a força necessária para fazer as escolhas certas nas situações mais difíceis. Considerada a obra mais pessoal de Hoover, o livro aborda sem medo alguns tabus da sociedade para explorar a complexidade das relações tóxicas, e como o amor e o abuso muitas vezes coexistem em uma confusão de sentimentos.“Um romance corajoso, de partir o coração, que enfia as garras em você e não te solta... Ninguém escreve sobre sentimentos tão bem quanto Colleen Hoover.” -Anna Todd, autora da série After “...Você vai sorrir em meio às lágrimas.” - Sarah Pekkanen, autora de Perfect Neighbors “Imperdível. Com um drama fascinante e verdades dolorosas, esse livro retrata de maneira poderosa a devastação que o abuso pode causar - e a força de quem sobrevive a ele...” - Kirkus Review', 44.90, 'https://m.media-amazon.com/images/I/91r5G8RxqfL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/91NiKTnC8mL._SL1500_.jpg');

