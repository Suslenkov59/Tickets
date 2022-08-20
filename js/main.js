/*

let a = [1, 2, 3, 4, 5];

for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
        if (a[i] > a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
        console.log(a);
    }
}
*/


/*document.querySelector("#button1").onclick = mySort; // оно живо но реплейс нод пока не робит

function mySort() {
    let Tickets = document.querySelectorAll('#Tickets');
    for (let i = 0; i < Tickets.children.length; i++) {
        for (let j = i; j < Tickets.children.length; j++) {
            if (+Tickets.children[i].getAttribute('data-sort') > +Tickets.children[j].getAttribute('data-sort')) {
                replacedNode = Tickets.replaceChild(Tickets.children[j], Tickets.children[i]);
                insertAfter(replacedNode, Tickets.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}*/

/*
const filterTickets = document.querySelectorAll('#Tickets');
document.querySelector('nav').addEventListener('click', (event)=> {
    if (event.target.tagName !== 'BUTTON') return false;
    let filterClass = event.target.dataset['data-sort'];
    console.log(filterClass);
})*/

/*
filterSelection("${content[key].price}")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("price");
    if (c == "${content[key].price}") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
*/

