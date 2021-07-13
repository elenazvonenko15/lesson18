'use strict';

function generateList(array) {
    const list = document.createElement('ul');
    array.forEach(element => {
        const listChild = document.createElement('li');
        list.append(listChild);
        if (Array.isArray(element)) {
            listChild.append(generateList(element));
        }
        else {
            listChild.innerText = element;
        }
    });
    return list;
}

const arr = ['1', '2', ['1.1', ['2.1', '2.2', '2.3'], '1.2', '1.3'], '3'];
document.body.append(generateList(arr));


function createTable() {
    let counter = 1;
    const startIndex = 0;
    const endIndex = 10;
    const table = document.createElement('table');
    document.body.append(table);
    for (let i = startIndex; i < endIndex; i++) {
        const row = document.createElement('tr');
        table.append(row);
        for (let j = startIndex; j < endIndex; j++) {
            const cell = document.createElement('td');
            cell.innerText = counter++;
            row.append(cell);
        }
    }
}

createTable();