const image=document.querySelectorAll('.image')



console.log(image)



image.forEach(element => {
    element.addEventListener("click", () =>{
        remove();
        element.classList.add('active')

    })
});


function remove(){
    image.forEach(e =>{
        e.classList.remove('active')
    })
}



