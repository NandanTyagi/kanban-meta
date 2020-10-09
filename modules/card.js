'use strict'

import { drag } from "./drag.js";
import { removeCard } from "./removeCard.js";

export function showCards(){
    console.log(localStorage.getItem('checkedUsername'));
    let loggedInUserFirstLetter = localStorage.getItem('checkedUsername').slice(0,1);
    let loggedInUserRestLetter = localStorage.getItem('checkedUsername').slice(1,localStorage.getItem('checkedUsername').lengt);
    document.getElementById('logged-in-user').innerText = `${loggedInUserFirstLetter.toLocaleUpperCase()}${loggedInUserRestLetter}` 
    function addCard(addBtnId, columnId) {
        let addBtn = document.getElementById(`${addBtnId}`);
        addBtn.addEventListener('click', (e) => {
            let columnsArray = [...document.querySelectorAll('.drag-container')];
            let currentColumnRaw = e.target.parentNode.parentNode.id;
            let cardsArray = [...document.querySelectorAll('.card-holder')];
            console.log(e.target.parentNode.parentNode.id);
            console.log(currentColumnRaw.slice(currentColumnRaw[0], currentColumnRaw.indexOf('-')));
            let currentColumn = currentColumnRaw.slice(currentColumnRaw[0], currentColumnRaw.indexOf('-'));
            let print = '';
            columnsArray.forEach(card => {
                print = `<div class="card-holder ${currentColumn} draggable" id="card-holder-${currentColumn}-${cardsArray.length + 1}" draggable="true">
                <div class="card" id="card-${currentColumn}-${cardsArray.length + 1}" contenteditable="true" data-placeholder="Edit content..."></div>
                <div class="del-btn hover del" id="del-btn-card-${currentColumn}-${cardsArray.length + 1}"><i class="far fa-trash-alt"></i></div>
                </div>`;
            });
            document.getElementById(columnId).insertAdjacentHTML('beforeend', print);
            removeCard(columnsArray);
            drag();
            console.log(cardsArray);
        });
    }
    addCard('todo-add-card', 'todo-column');
    addCard('doing-add-card', 'doing-column');
    addCard('test-add-card', 'test-column');
    addCard('done-add-card', 'done-column');
}