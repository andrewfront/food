function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
    if (modalTimerId) {
        clearInterval(modalTimerId)
    }
}

function hideModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}
function modal(triggerSelector, modalSelector, modalTimerId) {
        const modalTrigger = document.querySelectorAll(triggerSelector)
        const modal = document.querySelector(modalSelector)


        modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => showModal(modalSelector, modalTimerId))
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == "") {
                hideModal(modalSelector)
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                hideModal(modalSelector)
            }
        })


        function showScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                showModal(modalSelector, modalTimerId)
                window.removeEventListener('scroll', showScroll)
            }
        }
        window.addEventListener('scroll', showScroll)
}
export default modal
export {showModal}
export {hideModal}