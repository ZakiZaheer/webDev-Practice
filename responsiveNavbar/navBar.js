// var headerHeight = document.getElementById('header').clientHeight
// const navLink = document.getElementsByClassName('nav-link')
// for (let i  of navLink) {
//     i.parentElement.style.height = headerHeight + 'px'

//     console.log(i.parentElement)
//     console.log(i.parentElement.style.height)
//     console.log(headerHeight)
// }


const navToggle = document.getElementsByClassName('nav-toggle')[0]
navToggle.addEventListener('click',()=>{
    const navList = document.getElementsByClassName('nav-list')[0]
    navList.style.display = 'flex'
})
