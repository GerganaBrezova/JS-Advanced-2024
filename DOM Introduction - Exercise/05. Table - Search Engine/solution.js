function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let trows = document.querySelectorAll('tbody tr');
   let inputText = document.getElementById('searchField');

   function onClick() {
      for (let row of trows) {
         row.classList.remove('select');

         if (row.innerHTML.includes(inputText.value)) {
            row.className = 'select';
         }
      }
      inputText.value = '';   
   }
}