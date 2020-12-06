var container = document.getElementById('container'),
    buttonChange = document.getElementsByTagName('button')[0];

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

secondPar.addEventListener('click', clickSecondPar);

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

function clickSecondPar() {
    event.preventDefault();
    alert(event.target);
}

