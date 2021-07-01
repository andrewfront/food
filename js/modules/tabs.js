function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, tabsActiveSelector) {
        const tabs = document.querySelectorAll(tabsSelector)
        const tabsContent = document.querySelectorAll(tabsContentSelector)
        const tabsParent = document.querySelector(tabsParentSelector)

        function hideTabs() {
            tabsContent.forEach(item => {
                item.classList.add('hide')
                item.classList.remove('show', 'fade')
            })
            tabs.forEach(item => {
                item.classList.remove(tabsActiveSelector)
            })

        }

        function showTabs(i = 0) {
            tabsContent[i].classList.add('show', 'fade')
            tabsContent[i].classList.remove('hide')
            tabs[i].classList.add(tabsActiveSelector)
        }
        hideTabs()
        showTabs()
        tabsParent.addEventListener('click', function (e) {
            const target = e.target
            if (target && target.classList.contains(tabsSelector.slice(1))) {
                tabs.forEach((tab, i) => {
                    if (target == tab) {
                        hideTabs()
                        showTabs(i)
                    }
                })
            }
        })
}
export default tabs