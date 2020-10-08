import { removeCard } from "./removeCard.mjs";

export function addCard(addBtnId, columnId) {
    let addBtn = document.getElementById(`${addBtnId}`);
    addBtn.addEventListener('click', (e) => {
        let todoCardsArray = [...document.querySelectorAll('.todo')];
        let print = '';
        todoCardsArray.forEach(card => {
            print = `<div class="card-holder todo" id="card-holder-todo-${todoCardsArray.indexOf(card)}" draggable="true">
        <div class="card" id="card-todo-${todoCardsArray.indexOf(card)}" contenteditable="true" data-placeholder="Edit content..."></div>
        <div class="del-btn hover del" id="del-btn-card-todo-${todoCardsArray.indexOf(card)}"><i class="far fa-trash-alt"></i></div>
    </div>`;
        })
        console.log(print);
        document.getElementById(columnId).insertAdjacentHTML('beforeend', print);
        removeCard(todoCardsArray);
    });
}