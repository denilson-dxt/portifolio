function ShowMenu(){
    let menu = document.getElementById("menu")

    if (menu.style.display == "" || menu.style.display == "none"){
        menu.style.display = "flex"
    }else{
        menu.style.display = "none"
        
    }
}

function checkSize(){
    let menu = document.getElementById("menu")
    if (window.screen.width > 400){

        menu.style.display = "flex"
    }
}