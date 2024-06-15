
const btnDarcMode = document.querySelector(".dark-mode-btn");

// 1.Проверка тёмной темы на уровне системных настроек 
if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches ) {
    
    btnDarcMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}
// 2.Проверка тёмной темы в localStorage
if (localStorage.getItem('darcMode')=="dark") {
    btnDarcMode.classList.add("dark-mode-btn--active")
    document.body.classList.add("dark");
}
else if (localStorage.getItem('darcMode')=="light") {
    btnDarcMode.classList.remove("dark-mode-btn--active")
    document.body.classList.remove("dark");
}
// 3.если меняются системнеые настройки меняем тему 
window
    .matchMedia('(prefers-color-scheme:dark)')
    .addEventListener('change', (event) =>{
        const newColorSheme = event.matches ? "dark":"light"

        if (newColorSheme === "dark"){
            btnDarcMode.classList.add("dark-mode-btn--active")
            document.body.classList.add("dark");
            localStorage.setItem('darcMode','dark')
        }
        else{
            btnDarcMode.classList.remove("dark-mode-btn--active")
            document.body.classList.remove("dark");
            localStorage.setItem('darcMode','light')
        }

    })

// включение ночного режима по кнопк 
btnDarcMode.onclick = function (){
    
    btnDarcMode.classList.toggle("dark-mode-btn--active")
    const isDarc = document.body.classList.toggle("dark");
    
    if (isDarc) {
        localStorage.setItem('darcMode','dark')
        
    }
    else{
        localStorage.setItem('darcMode','light')
    }


}
