let list = document.getElementsByTagName('li')
function even () {
    for (let i= 0; i < list.length ; i++) {
        if ((i + 1) % 2===0) {
            list[i].classList.add('even')
          
        }
    }    
}
function odd () {
    for (let i= 0; i < list.length ; i++) {
    if ((i + 1) % 2!==0) {
        list[i].classList.remove('even')
        list[i].classList.add('odd')
        

    }
}
}
function reset () {
    for (let i= 0; i < list.length ; i++) {
    // if ((i + 1) % 2!==0) {
        list[i].classList.remove('odd')
        list[i].classList.remove('even')


    // }
}
}
