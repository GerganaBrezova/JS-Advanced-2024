function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', onChange);

    function onChange(event) {
        let element = event.currentTarget;
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (!pattern.test(element.value)) {
            element.classList.add('error');
        } else {
            element.classList.remove('error');
        }
    }
}