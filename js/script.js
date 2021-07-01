import tabs from './modules/tabs'
import cards from './modules/cards'
import modal from './modules/modal'
import slider from './modules/slider'
import calculator from './modules/calculator'
import timer from './modules/timer'
import server from './modules/server'
import {showModal} from './modules/modal'
document.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setInterval(() => showModal('.modal', modalTimerId), 500000)
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    cards()
    modal('[data-modal]', '.modal', modalTimerId)
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    })
    calculator()
    timer('.timer', '2021-08-12')
    server('form', modalTimerId)
})