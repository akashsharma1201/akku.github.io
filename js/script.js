window.addEventListener("scroll",function(){
    let list=document.getElementById("nav-bar")
    if(window.pageYOffset >=300){
        list.classList.add("sticky");
    }else if(window.pageYOffset <=300){
        list.classList.remove("sticky");
    }
})

