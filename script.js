import { nandanDrag } from './modules/drag.mjs';
nandanDrag();
import { addCard } from './modules/addCard.mjs';
import { removeCard } from './modules/removeCard.mjs';
addCard('todo-add-card', 'todo-column');
addCard('doing-add-card', 'doing-column');
addCard('test-add-card', 'test-column');
addCard('done-add-card', 'done-column');
removeCard();