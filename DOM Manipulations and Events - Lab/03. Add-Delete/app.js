function addItem() {
    let input = document.getElementById('newItemText');

    if (input.value.length == 0) {
        return;
    }
    let li = document.createElement('li');
    li.textContent = input.value;

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', deleteItem);
    li.appendChild(deleteBtn);

    let items = document.getElementById('items');
    items.appendChild(li);

    input.value = '';

    function deleteItem(event) {
        let deleteBtn = event.target;
        let liToDelete = deleteBtn.parentElement;
        liToDelete.remove();
    }
}