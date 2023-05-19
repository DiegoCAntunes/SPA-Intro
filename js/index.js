import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universe','/pages/universe.html')
router.add('/explore','/pages/explore.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

//Main screen button
const mainBtn = document.querySelector('.btn')
console.log(mainBtn)
mainBtn.addEventListener('click', () =>{

    window.history.pushState({}, "", '/universe')
    handle('a[href= "/universe"]')

})

