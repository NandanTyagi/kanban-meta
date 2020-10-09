'use strict'

import { drag } from './modules/drag.js';
import { showCards } from './modules/card.js';
import { removeCard } from './modules/removeCard.js';
import { logIn } from './modules/logIn.js';


logIn()
showCards();
removeCard();
drag();