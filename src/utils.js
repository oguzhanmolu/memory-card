const shuffleArr = (arr) => [...arr].sort(() => Math.random() - 0.5);

const handleAnimation = (cards) => {
  cards.forEach((card) => {
    card.classList.add('flip-animation');
    card.childNodes.forEach((child) => (child.style.display = 'none'));

    card.addEventListener('animationend', () => {
      card.classList.remove('flip-animation');
      card.childNodes.forEach((child) => (child.style.display = 'flex'));
    });
  });
};

export { shuffleArr, handleAnimation };
