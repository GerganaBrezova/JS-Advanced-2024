function solve() {
  let inputText = document.getElementById('input').value;
  let output = document.getElementById('output');

  let splitedText = inputText.split('.').filter(s => s !== '');
  
  while (splitedText.length > 0) {
    let text = splitedText.splice(0, 3).join('. ') + ('.');

    let p = document.createElement('p');
    p.textContent = text;

    output.appendChild(p);
  }

}