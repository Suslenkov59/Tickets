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


document.querySelector("#button1").onclick = mySort;

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

function insertAfter (elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

/*
const filterTickets = document.querySelectorAll('#Tickets');
document.querySelector('nav').addEventListener('click', (event)=> {
    if (event.target.tagName !== 'BUTTON') return false;
    let filterClass = event.target.dataset['data-sort'];
    console.log(filterClass);
})*/
