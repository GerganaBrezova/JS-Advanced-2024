window.addEventListener('load', solve);

function solve() {

    const inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count')
    };

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNextClick);

    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const result = document.getElementById('verification');

    function onNextClick(event) {
        event.preventDefault();

        if (
            inputs.firstName.value == '' ||
            inputs.lastName.value == '' ||
            inputs.dateIn.value == '' ||
            inputs.dateOut.value == '' ||
            inputs.peopleCount.value == ''
        ) {
            return;
        }

        const firstName = inputs.firstName.value;
        const lastName = inputs.lastName.value;
        const dateIn = inputs.dateIn.value;
        const dateOut = inputs.dateOut.value;
        const peopleCount = Number(inputs.peopleCount.value);

        if ((new Date(dateIn)).getTime() >= (new Date(dateOut)).getTime()) {
            return;
        }

        nextBtn.parentElement.reset();
        nextBtn.disabled = true;

        const preview = createPreview(firstName, lastName, dateIn, dateOut, peopleCount);
        infoList.appendChild(preview);
    }

    function createInfo(firstName, lastName, dateIn, dateOut, peopleCount) {
        const li = createEl('li');
        li.className = 'reservation-content';

        const article = createEl('article');
        li.appendChild(article);

        article.appendChild(createEl('h3', `Name: ${firstName} ${lastName}`));
        article.appendChild(createEl('p', `From date: ${dateIn}`));
        article.appendChild(createEl('p', `To date: ${dateOut}`));
        article.appendChild(createEl('p', `For ${peopleCount} people`));

        return li;
    }

    function createPreview(firstName, lastName, dateIn, dateOut, peopleCount) {
        const li = createInfo(firstName, lastName, dateIn, dateOut, peopleCount);

        const editBtn = createEl('button', 'Edit');
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => onEditClick(firstName, lastName, dateIn, dateOut, peopleCount));

        const continuetBtn = createEl('button', 'Continue');
        continuetBtn.className = 'continue-btn';
        continuetBtn.addEventListener('click', () => onContinueClick(firstName, lastName, dateIn, dateOut, peopleCount));

        li.appendChild(editBtn);
        li.appendChild(continuetBtn);

        return li;
    }

    function onEditClick(firstName, lastName, dateIn, dateOut, peopleCount) {
        inputs.firstName.value = firstName;
        inputs.lastName.value = lastName;
        inputs.dateIn.value = dateIn;
        inputs.dateOut.value = dateOut;
        inputs.peopleCount.value = peopleCount;

        infoList.textContent = '';
        nextBtn.disabled = false;
    }

    function onContinueClick(firstName, lastName, dateIn, dateOut, peopleCount) {
        const confirmation = createConfirmation(firstName, lastName, dateIn, dateOut, peopleCount);
        confirmList.appendChild(confirmation);
        infoList.textContent = '';
    }

    function createConfirmation(firstName, lastName, dateIn, dateOut, peopleCount) {
        const li = createInfo(firstName, lastName, dateIn, dateOut, peopleCount);

        const confirmBtn = createEl('button', 'Confirm');
        confirmBtn.className = 'confirm-btn';
        confirmBtn.addEventListener('click', onFinishClick.bind(null, true));

        const cancelBtn = createEl('button', 'Cancel');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.addEventListener('click', onFinishClick.bind(null, false));

        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);

        return li;
    }

    function onFinishClick(confirmed) {
        const className = confirmed ? 'reservation-confirmed' : 'reservation-cancelled';
        const text = confirmed ? 'Confirmed.' : 'Cancelled.';

        result.className = className;
        result.textContent = text;

        confirmList.textContent = '';

        nextBtn.disabled = false;
    }

    function createEl(type, content) {
        const newEl = document.createElement(type);

        if (content) {
            newEl.textContent = content;
        }

        return newEl;
    }
}





