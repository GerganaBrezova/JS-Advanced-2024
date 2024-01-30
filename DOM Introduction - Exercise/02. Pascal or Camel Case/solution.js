function solve() {
  let inputText = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let resultText = '';

  if (convention === 'Camel Case') {
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === ' ') {
        resultText += inputText[i + 1].toUpperCase();
        i++;
      } else {
        resultText += inputText[i].toLowerCase();
      }
    }
  } else if (convention === 'Pascal Case') {
    resultText += inputText[0].toUpperCase();

    for (let i = 1; i < inputText.length; i++) {
      if (inputText[i] === ' ') {
        resultText += inputText[i + 1].toUpperCase();
        i++;
      } else {
        resultText += inputText[i].toLowerCase();
      }
    }
  } else {
    resultText = 'Error!';
  }

  let result = document.getElementById('result');
  result.textContent = resultText;
}