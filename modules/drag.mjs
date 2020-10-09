'use strict'

export function drag() {
    let draggables = document.querySelectorAll('.draggable');
    const dragContainers = document.querySelectorAll('.drag-container');
    // console.log(dragContainers);
    // console.log(draggables);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            console.log(e.target.id + ' Dragstarted!');
            draggable.classList.add('dragging');
        })
        draggable.addEventListener('dragend', (e) => {
            console.log(e.target.id + ' Dragenden!');
            draggable.classList.remove('dragging');
        })
    });
    dragContainers.forEach(container => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY);
            // console.log(afterElement.id.slice(afterElement.id.length - 1,afterElement.id.length));
            const draggedEl = document.querySelector('.dragging');
                if(afterElement == null) {
                    container.appendChild(draggedEl)
                }else {
                    container.insertBefore(draggedEl, afterElement);
                }
        })
    });
}
function getDragAfterElement(container,y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    return draggableElements.reduce((closest, child)=> {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                if(offset < 0 && offset > closest.offset) {
                    return {offset: offset, element: child};
                }else {
                    return closest;
                }
    }, { offset: Number.NEGATIVE_INFINITY } ).element;
}