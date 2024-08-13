const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-fade')
            observer1.unobserve(entry.target)
        }
    })
})

Array.from(document.querySelectorAll('.blog')).forEach((blogs) => {
    observer1.observe(blogs)
})

// 图片懒加载
const observer2 = new  IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-img')
            const img = entry.target
            img.src = img.dataset.src
            observer2.unobserve(img)
        }
    })
})

document.querySelectorAll('.img-data').forEach((img) => {
    observer2.observe(img)
})

const blogBord = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('blog-title-bord-test')
            blogBord.unobserve(entry.target)
        }
    })
})

document.querySelectorAll('.blog-title-bord').forEach((blogBor) => {
    blogBord.observe(blogBor)
})