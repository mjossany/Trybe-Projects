import md5 from 'crypto-js/md5';

const saveRankLocalStorage = (name, email, score = 0) => {
  const img = md5(email).toString();
  const url = `https://www.gravatar.com/avatar/${img}`;
  const player = {
    name,
    score,
    picture: url,
  };

  const rank = JSON.parse(localStorage.getItem('ranking')) || [];
  rank.push(player);
  localStorage.setItem('ranking', JSON.stringify(rank));
};

export default saveRankLocalStorage;
