const button = document.querySelector('#button');
const expressionContainer = document.querySelector('#expression');

button.addEventListener('click', () => {
  fetch('expression.txt')
    .then(response => response.text())
    .then(expression => {
      expressionContainer.textContent = expression;
    });
});