document.addEventListener('DOMContentLoaded', () => {
    const blogS = document.querySelectorAll('.blog')
    blogS.forEach((blog) => {
        const blogContent = blog.querySelector('.blog-content')
        const blogButton = blog.querySelector('span')

        if (blogContent.clientHeight < 520) {
            blog.style.height = `${blogContent.clientHeight}px`
        } else  {
            blog.style.height = '520px'
        }


        blogButton.addEventListener('click', () => {
            if (blog.style.height === '520px') {
                blog.style.height = `${blogContent.clientHeight - 20}px`
                blogButton.innerHTML = '收起'
                blogButton.style.color = '#d8216b'
            } else if (blogContent.clientHeight < 520) {
                return
            } else {
                blog.style.height = '520px'
                blogButton.innerHTML = '展开'
                blogButton.style.color = '#82b5f6'
            }
        })


    })
})