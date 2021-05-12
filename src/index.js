import router from './routes'


// If the webpage loaded has been completed.
// Then run the next function.
window.addEventListener('load', router);
// When the hash has change, trigger the logic.
window.addEventListener('hashchange', router);
