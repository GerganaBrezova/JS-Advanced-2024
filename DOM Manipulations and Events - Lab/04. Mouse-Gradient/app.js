function attachGradientEvents() {
    let result = document.getElementById('result');
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', moving);
    gradient.addEventListener('mouseout', out);

    function moving(event) {
        let percentage = event.offsetX / (event.target.clientWidth - 1);
        percentage = Math.trunc(percentage * 100);
        result.textContent = percentage + '%';
    }

    function out(event) {
        result.textContent = '';
    }
}