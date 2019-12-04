Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)];
};

module.exports = {
  spin: () => {
    return ['Nun', 'Gimmel', 'Hay', 'Shin'].randomElement();
  }
};
