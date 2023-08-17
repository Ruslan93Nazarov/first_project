'use strict'

const accordingItems = document.querySelectorAll('.according-item')

accordingItems.forEach((item) => {
  const title = item.querySelector('.according-title')
  console.log(title)
  title.addEventListener('click', () => {
    for (let i = 0; i < accordingItems.length; i++) {
      if (accordingItems[i] != item) {
        accordingItems[i].classList.remove('active')
      } else {
        item.classList.toggle('active')
      }
    }
  })
})
