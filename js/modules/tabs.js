function tabs() {
        const tabs = document.querySelectorAll('.tabheader__item')
        const tabsContent = document.querySelectorAll('.tabcontent')
        const tabsParent = document.querySelector('.tabheader__items')

        function hideTabs() {
            tabsContent.forEach(item => {
                item.classList.add('hide')
                item.classList.remove('show', 'fade')
            })
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active')
            })

        }

        function showTabs(i = 0) {
            tabsContent[i].classList.add('show', 'fade')
            tabsContent[i].classList.remove('hide')
            tabs[i].classList.add('tabheader__item_active')
        }
        hideTabs()
        showTabs()
        tabsParent.addEventListener('click', function (e) {
            const target = e.target
            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((tab, i) => {
                    if (target == tab) {
                        hideTabs()
                        showTabs(i)
                    }
                })
            }
        })
}
module.exports = tabs