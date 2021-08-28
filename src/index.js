module.exports = function check(str, bracketsConfig) {
  const openCloseBraces = bracketsConfig.reduce(
    (prevVal, [openBrace, closeBrace]) => ({
      ...prevVal,
      [openBrace]: closeBrace,
    }),
    {}
  );

  const temp = [];

  for (let i = 0; i < str.length; i++) {
    const brace = str[i];
    const lastBrace = temp[temp.length - 1];

    if (brace === openCloseBraces[brace] && brace === lastBrace) {
      temp.pop();
    } else if (openCloseBraces.hasOwnProperty(brace) || !lastBrace) {
      temp.push(brace);
    } else if (brace === openCloseBraces[lastBrace]) {
      temp.pop();
    } else {
      break;
    }
  }

  return temp.length === 0;
};
