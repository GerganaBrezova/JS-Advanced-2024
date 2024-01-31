function focused() {
    let fileds = Array.from(document.querySelectorAll('input'));

    for (let field of fileds) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(event) {
        let parentElement = event.target.parentElement;
        parentElement.classList.add('focused');
    }

    function onBlur(event) {
        let parentElement = event.target.parentElement;
        parentElement.classList.remove('focused');
    }
}