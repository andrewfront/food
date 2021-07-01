function modal() {
        const modalTrigger = document.querySelectorAll('[data-modal]')
        const modal = document.querySelector('.modal')

        function showModal() {
            modal.classList.add('show')
            modal.classList.remove('hide')
            document.body.style.overflow = 'hidden'
            clearInterval(timerId)
        }

        function hideModal() {
            modal.classList.add('hide')
            modal.classList.remove('show')
            document.body.style.overflow = ''
        }
        modalTrigger.forEach(btn => {
            btn.addEventListener('click', showModal)
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == "") {
                hideModal()
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                hideModal()
            }
        })
        const timerId = setInterval(showModal, 50000)

        function showScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                showModal()
                window.removeEventListener('scroll', showScroll)
            }
        }
        window.addEventListener('scroll', showScroll)
}
module.exports = modal