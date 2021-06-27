export class Carrossel {

        constructor(anterior, proximo, listaLivros){
          this.anterior = document.querySelector(anterior)  
          this.proximo = document.querySelector(proximo)
          this.listaLivros = document.querySelector(listaLivros) 

          this.slides = this.getListaSlides()
          

          console.log(this.getListaSlides());


        }

        getListaSlides(){
          return Array.from(this.listaLivros.children)
        }

       
}

