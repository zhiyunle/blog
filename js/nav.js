function setBody () {
    const body = document.querySelector('body')
    const navTop = document.querySelector('.nav')
    navTop.style.marginTop = body.offsetTop + 45 + 'px'
}

document.addEventListener('DOMContentLoaded', () => {
    setBody()
    window.addEventListener('resize', setBody)
})

const butt = document.querySelector('.left-butt');
const navLeft = document.querySelector('.left-content');
const nav = document.querySelector('.nav');
const leftLi = document.querySelectorAll('.left-content li');

butt.addEventListener('click', () => {
    const navStyle = window.getComputedStyle(navLeft);

    if (navStyle.display === 'none') {
        navLeft.style.display = 'flex';
        nav.style.height = '200px';
        for (let i = 0; i < leftLi.length; i++) {
            leftLi[i].style.opacity = '1'
            leftLi[i].style.animation = `li_animation_start ${i + 0.5}s ease`
        }
    } else {
        navLeft.style.display = 'none';
        nav.style.height = '60px';
        for (let i = 0; i < leftLi.length; i++) {
            leftLi[i].style.opacity = '0'
            leftLi[i].style.animation = `li_animation_start ${i + 0.5}s ease`
        }
    }
})
