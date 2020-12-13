var xInput = document.getElementsByName('xInput')[0],
    yInput = document.getElementsByName('yInput')[0],
    createButton = document.getElementsByName('createButton')[0];

createButton.addEventListener('click', clickCreateButton);
xInput.addEventListener('keyup', inputKeypress);
yInput.addEventListener('keyup', inputKeypress);


function clickCreateButton() {
    if (!Number.isInteger(+xInput.value) || +xInput.value < 1 || +xInput.value > 10) {
        alert('Значение X должно быть целое число от 1 до 10');
        xInput.value = '';
    } else if (!Number.isInteger(+yInput.value) || +yInput.value < 1 || +yInput.value > 10) {
        alert('Значение Y должно быть целое число от 1 до 10');
        yInput.value = '';
    } else {
        var OldTable = document.getElementsByTagName('table');
        if (OldTable.length === 1) {
            OldTable[0].remove();
        }
        var newTable = document.createElement('table');
        newTable.addEventListener('click', clickOldTable);

        document.body.appendChild(newTable);
        var newTR = document.createElement('tr'),
            newTD = document.createElement('td'),
            trElement,
            tdElement;

        for (var i = 0; i < yInput.value; i++){
            trElement = newTable.appendChild(newTR.cloneNode(true));
            for (var j = 0; j < xInput.value; j++) {
                tdElement = trElement.appendChild(newTD.cloneNode(true));

                if ((i % 2 === 0 && j % 2 === 0) || i % 2 === 1 && j % 2 === 1) {
                    tdElement.style.backgroundColor = 'black';
                } else {
                    tdElement.style.backgroundColor = 'white';
                }
            }
        }
        xInput.value = '';
        yInput.value = '';
    }
}

function clickOldTable() {
    var a, b;
    if (this.rows[0].cells[0].style.backgroundColor === 'black') {
        a = 'white';
        b = 'black';
    } else {
        a = 'black';
        b = 'white';
    }

    for (var i = 0; i < this.rows.length; i++) {
        var row = this.rows[i];
        for (var j = 0; j < row.cells.length; j++) {
            if ((i % 2 === 0 && j % 2 === 0) || i % 2 === 1 && j % 2 === 1)
                row.cells[j].style.backgroundColor = a;
            else
                row.cells[j].style.backgroundColor = b;
        }
    }
}

function inputKeypress() {
    createButton.disabled = !xInput.value || !yInput.value;
}

Number.isInteger = function(value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
};