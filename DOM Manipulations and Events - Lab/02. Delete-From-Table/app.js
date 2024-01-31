function deleteByEmail() {
    const input = document.querySelector('input');
    const items = Array.from(document.querySelectorAll('tbody tr'));

    let isRemoved = false;

    for (let row of items) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            isRemoved = true;
        }
    }

    const result = document.getElementById('result');
    if (isRemoved) {
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }

    input.value = '';
}