var cellAdd = document.getElementById('cellAdd'),
    tableMain = document.getElementsByTagName('table')[0];

cellAdd.addEventListener('click', clickCellAdd);

tableMain.addEventListener('click', clickTable);
tableMain.addEventListener('focusout', focusoutTable);
tableMain.addEventListener('keydown', keydownTable);

function clickCellAdd() {

    var newString = document.createElement('tr');

    newString.innerHTML = '<tr>' +
        '<th></th>' +
        '<th></th>' +
        '<th></th>' +
        '</tr>';

    tableMain.insertBefore(newString, tableMain.firstElementChild);
}

function clickTable(event) {

    var target = event.target,
        newInput = document.createElement('input');

    if (target.tagName == 'TH') {
        newInput.value = target.innerText;
        target.innerText = '';
        target.appendChild(newInput).focus();
    }
}

function focusoutTable(event) {

    var inputSave = document.getElementsByTagName('input');

    if (inputSave.length > 0) {
        inputSave[0].parentElement.textContent += inputSave[0].value;
        inputSave[0].remove();
    }
}

function keydownTable(event) {

    var inputSave = document.getElementsByTagName('input');

    if (inputSave.length > 0 && event.keyCode === 13) {
        inputSave[0].parentElement.textContent += inputSave[0].value;
        inputSave[0].remove();
    }
}