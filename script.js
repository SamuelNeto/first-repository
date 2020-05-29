/* 
const setFieldD = (init=1) => {
    if(init == 0) {
        field.style.transition = 'all .9s'
    }
    field.placeholder = ''
    field.style.width = '30px'
    // field.style.visibility = 'hidden'
}


()()
&&
list_items[i]
if(!screenWidth <= 800) {
} else if(!(i < 2 || i > 6)) {
    list_items[i].className = 'core-color sec-2-back-color'
}
(ctx, next) => {
    let screenWidth = screen.width
    ctx.scrWidth = screenWidth
    next()
} */
/* const setMargOfLookF = () => {
    lookfor.style.marginLeft = '0'
}
let lists = document.getElementsByTagName('ul')
lists[1].style.backgroundColor = '#fff'
*/
const box_search = document.getElementById('img-search')
box_search.addEventListener('mousemove', function(){
    const field = document.getElementById('lookf')
    field.style.visibility = 'visible'
    field.style.width = '250px'
    field.placeholder = 'Pesquisar'
})

const list_items = document.querySelector('.menu').getElementsByTagName('li')
for(let i = 0; i < list_items.length; i++) {
    list_items[i].className = 'core-color-l sec-back-color'
}