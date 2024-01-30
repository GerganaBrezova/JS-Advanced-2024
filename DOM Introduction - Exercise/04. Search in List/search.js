function search() {
   let inputText = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('li'));
   let matches = 0;

   for (let town of towns) {
      town.style.fontWeight = '';
      town.style.textDecoration = '';

      if (town.textContent.includes(inputText)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }
   let result = document.getElementById('result');
   result.textContent = `${matches} matches found`;
}
