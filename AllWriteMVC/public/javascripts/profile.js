window.addEventListener("load", function(e){

  const wheel = document.querySelector(".my__books")

  const body = document.querySelector("body")

  wheel.addEventListener("mouseover", event =>{

    body.style.overflowY = "hidden"

  })

  wheel.addEventListener("mouseout", event =>{

    body.style.overflowY = "scroll"

  })

  wheel.addEventListener("wheel", event => {

    if(event.deltaY > 0){

      event.target.scrollBy(50, 0)

    }else{

      event.target.scrollBy(-50, 0)

    }
  })



})
