var container = document.getElementById('container'),
    buttonChange = document.getElementsByTagName('button')[0];

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

localStorage.clear();

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

secondPar.firstElementChild.addEventListener('click', clickSecondPar);
secondPar.lastElementChild.addEventListener('click', clickSecondPar);

buttonChange.onclick = function () {
    var allChildren = container.children;
    var aChildren;
    //for (var i = 0; i < allChildren.length; i++) {
        //aChildren = allChildren[i].children;
        aChildren = allChildren[0].children;
        for (var j = 0; j < aChildren.length; j++) {
            aChildren[j].classList.add('myStyle');
        }
    //}
}

function clickSecondPar(event) {
    event.preventDefault();
    var valueKey,
        key;
    if (localStorage.getItem(this.href) == null && this.href[this.href.length-1] !== '#') {
        localStorage.setItem(this.href, JSON.stringify({path: this.text}));
        this.href = '#';
        alert('ссылка была сохранена');
    } else {
        for (var i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
            valueKey = JSON.parse(localStorage[key]);
            if (this.text === valueKey.path) {
                alert(key);
            }

        }
    }
}

