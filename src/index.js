module.exports = function multiply(first, second) {
  let result = [];
  first = first.split('').reverse();
  second = second.split('').reverse();

  first.forEach((a, i, first) => {
    second.forEach((b, j, second) => {
      if (!result[i + j]) {
        result[i + j] = 0;
      };
      result[i + j] += first[i] * second[j];
    });
  });

  result.forEach((a, i, result) => {
    if (result[i] >= 10) {
      if (!result[i + 1]) {
        result[i + 1] = 0;
      };
      result[i + 1] += Math.floor(result[i] / 10);
      result[i] = result[i] % 10;
    };
  });

  return result.reverse().join('');
};

