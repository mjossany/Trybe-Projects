const fs = require('fs').promises;

const dataTalkers = 'talker.json';

const allTalkers = async (_req, res, _next) => {
  const data = JSON.parse(await fs.readFile(dataTalkers, 'utf8'));
  if (!data) return res.status(200).send([]);
  return res.status(200).send(data);
};

const findTalker = async (req, res, _next) => {
  const { id } = req.params;
  const data = JSON.parse(await fs.readFile(dataTalkers, 'utf8'));
  if (!data) return res.status(200).send([]);
  const found = data.find((talker) => talker.id === +id);
  if (!found) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).json(found);
};

const validateName = (name) => {
  if (!name) return 'O campo "name" é obrigatório';
  if (name.length < 3) return 'O "name" deve ter pelo menos 3 caracteres';
  return false;
};

const validateAge = (age) => {
  if (!age) return 'O campo "age" é obrigatório';
  if (age < 18) return 'A pessoa palestrante deve ser maior de idade';
  return false;
};

const validateWatchedAt = (watchedat) => {
  const regexWatchedAt = /([0-9]{2})+\/+([0-9]{2})+\/+([0-9]{4})/;
  if (!watchedat.match(regexWatchedAt)) {
    return 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
  }
  return false;
};

const validateRate = (rate) => {
  if (rate < 1 || rate > 5) {
    return 'O campo "rate" deve ser um inteiro de 1 à 5';
  }
  return false;
};

const validateTalkKeys = (watchedat, rate) => {
  const isValidRate = validateRate(rate);
  if (isValidRate) return isValidRate;
  if (!watchedat || !rate) {
    return 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';
  }
  const isValidWatchedAt = validateWatchedAt(watchedat);
  if (isValidWatchedAt) return isValidWatchedAt;
  return false;
};

const validateTalk = (talk) => {
  if (!talk) return 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';
  return false;
};

const createTalker = async (body) => {
  const data = JSON.parse(await fs.readFile(dataTalkers, 'utf8'));
  data.push({
    ...body,
    id: data.length + 1, 
  });
  await fs.writeFile(dataTalkers, JSON.stringify(data));
  return data;
};

const validateNewTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const isValidName = validateName(name);
  const isValidAge = validateAge(age);
  const isValidTalk = validateTalk(talk);
  if (isValidTalk) return res.status(400).json({ message: isValidTalk });
  const isValidTalkKeys = validateTalkKeys(talk.watchedAt, talk.rate);
  
  if (isValidName) return res.status(400).json({ message: isValidName });
  if (isValidAge) return res.status(400).json({ message: isValidAge });
  if (isValidTalkKeys) return res.status(400).json({ message: isValidTalkKeys });
  const talkers = await createTalker(req.body);
  const talker = talkers.pop();
  return res.status(201).json(talker);
};

const modifyTalker = async (body, id) => {
  const { name, age, talk } = body;
  const data = JSON.parse(await fs.readFile(dataTalkers, 'utf8'));
  const talkerFound = data.findIndex((talker) => talker.id === +id);
  data[talkerFound] = { ...data[talkerFound], name, age, talk };
  await fs.writeFile(dataTalkers, JSON.stringify(data));
  return data[talkerFound];
};

const validateTalkerModificantion = async (req, res) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const isValidName = validateName(name);
  const isValidAge = validateAge(age);
  const isValidTalk = validateTalk(talk);
  if (isValidTalk) return res.status(400).json({ message: isValidTalk });
  const isValidTalkKeys = validateTalkKeys(talk.watchedAt, talk.rate);
  
  if (isValidName) return res.status(400).json({ message: isValidName });
  if (isValidAge) return res.status(400).json({ message: isValidAge });
  if (isValidTalkKeys) return res.status(400).json({ message: isValidTalkKeys });
  const talker = await modifyTalker(req.body, id);
  return res.status(200).json(talker);
};

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(await fs.readFile(dataTalkers, 'utf8'));
  const arrayFiltered = data.filter((talker) => talker.id !== +id);
  await fs.writeFile(dataTalkers, JSON.stringify(arrayFiltered));
  return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};

const searchByTerm = async (req, res) => {
  const { q } = req.query;
  const data = JSON.parse(await fs.readFile(dataTalkers, 'utf8'));
  if (!q) res.status(200).json(data);
  const filteredTalkers = data.filter((talker) => talker.name.includes(q));
  if (!filteredTalkers) return res.status(200).json([]);
  return res.status(200).json(filteredTalkers);
};

module.exports = { 
  allTalkers,
  validateNewTalker,
  searchByTerm,
  findTalker,
  validateTalkerModificantion,
  deleteTalker,
};
