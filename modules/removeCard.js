'use strict'

export function removeCard(array) {
    let delBtnsArray = [...document.querySelectorAll('.del-btn')]
    delBtnsArray.forEach(delBtn => {
        delBtn.addEventListener('click', e => {
            e.preventDefault();
            e.target.parentNode.parentNode.remove();
            let id = e.target.id;
            let cardId = id.slice(id.length -1);
            array.splice(cardId,1);
        })
    })
}