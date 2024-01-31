function addItem() {
    const input = document.getElementById('newItemText');

    if (input.value.length == 0) {
        return;
    }

    const items = document.getElementById('items');
    const li = document.createElement('li');

    li.textContent = input.value;
    items.appendChild(li);

    input.value = '';
}