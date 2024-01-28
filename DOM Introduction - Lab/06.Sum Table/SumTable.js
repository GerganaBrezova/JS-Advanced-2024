function sumTable() {
    let table = document.querySelectorAll('table tr');
    let total = 0;

    for (let i = 1; i < table.length; i++) {
        let tableRow = table[i];
        let cols = tableRow.children;

        let price = cols[1].textContent;
        total += Number(price);
    }

    document.getElementById('sum').textContent = total;
}