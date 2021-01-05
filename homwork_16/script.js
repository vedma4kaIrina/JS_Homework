var downloadButton = document.getElementsByName('downloadButton')[0],
    bookmark = document.getElementsByClassName('tab')[0];

downloadButton.addEventListener('click', clickDownloadButton);

localStorage.clear();

function clickDownloadButton() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();
    xhr.onload = function() {
        var statusType = +String(this.status)[0],
            answer,
            newBookmark,
            counter = 1,
            divMain,
            divFirstName,
            divLastName,
            divFoto;

        if (statusType === 2 && document.getElementsByClassName('displayBlock').length === 0) {
            answer = JSON.parse(this.response).data;
            for (var i = 0; i < answer.length; i++) {
                newBookmark = document.createElement('button');
                newBookmark.classList.add('tabLinks');
                newBookmark.textContent = 'User ' + counter;
                bookmark.appendChild(newBookmark);
                newBookmark.addEventListener('click', openNewBookmark);

                divMain = document.createElement('div');
                divMain.classList.add('displayNone');
                divMain.id = 'User' + counter;
                document.body.appendChild(divMain);

                divFoto = document.createElement('img');
                divFoto.src = answer[i]['avatar'];
                divMain.appendChild(divFoto);

                divFirstName = document.createElement('div');
                divFirstName.textContent = 'First Name: ' + answer[i]['first_name'];
                divMain.appendChild(divFirstName);

                divLastName = document.createElement('div');
                divLastName.textContent = 'Last Name: ' + answer[i]['last_name'];
                divMain.appendChild(divLastName);

                if (counter === 1) {
                    newBookmark.click();
                }
                counter++;
            }
        }
    };

    xhr.onerror = function() {
        var divError = document.createElement('div');
        divError.textContent = 'Ошибка! данные не получены!';
        divError.classList.add('error');
        document.body.appendChild(divError);
    };
}

function openNewBookmark(event) {
    var tabContent,
        tabLinks,
        num,
        i,
        user;

    tabContent = document.getElementsByClassName('displayBlock');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.add('displayNone');
        tabContent[i].classList.remove('displayBlock');
    }

    tabLinks = document.getElementsByClassName('tabLinks');
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }
    num = this.textContent[this.textContent.length-1];

    user = document.getElementById('User' + num);
    user.classList.remove('displayNone');
    user.classList.add('displayBlock');
    event.currentTarget.className += ' active';
}