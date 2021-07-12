$(document).ready(function(){
    let go = $('.goTo');
    go.click(function(e){
      $("body, html").animate({ scrollTop: $(this.hash).offset().top,}, 1000)
    });
  

document.getElementById("navPortafolio").addEventListener("click",function(){
    this.classList.add("active");
    document.getElementById("navAbout").classList.remove("active");
    document.getElementById("navContact").classList.remove("active");
  });

  document.getElementById("navAbout").addEventListener("click",function(){
    this.classList.add("active");
    document.getElementById("navPortafolio").classList.remove("active");
    document.getElementById("navContact").classList.remove("active");
  });

  document.getElementById("navContact").addEventListener("click",function(){
    this.classList.add("active");
    document.getElementById("navAbout").classList.remove("active");
    document.getElementById("navPortafolio").classList.remove("active");
  })

  $(window).scroll(function(){
   // $('#nav').toggleClass('scrolled',$(this).scrollTop() > 200);
    if($('#nav').offset().top > 390){
      $('#nav').removeClass("bg-transparent");
      $('#nav').addClass("bg-dark");
    }else{
      $('#nav').removeClass("bg-black");
      $('#nav').addClass("bg-transparent");
    }
  });

  const portafolioItem = document.querySelectorAll('#portafolio .portafolio-item');  
    portafolioItem.forEach(element => {
        element.addEventListener("mouseover",function(){
        element.classList.add("portafolio-item-activo");
        });

        element.addEventListener("mouseout",function(){
        element.classList.remove("portafolio-item-activo");
        });

        let buttonElement = element.querySelectorAll("button");
        buttonElement[0].addEventListener("click",function(e){   
        })      
    });

  document.getElementById("seeSistem1").addEventListener("click",function(){
    document.getElementById("modal-carousel").classList.add('modal-carousel-activo');
    document.getElementById("modal").setAttribute("style", "display:block;");
  })

  document.getElementById("seeSistem2").addEventListener("click",function(){
    document.getElementById("modal-carousel2").classList.add('modal-carousel2-activo');
    document.getElementById("modal").setAttribute("style", "display:block;");
  })

  document.getElementById("modal").addEventListener("click",function(e){
    document.getElementById("modal-carousel").classList.remove("modal-carousel-activo");
    document.getElementById("modal-carousel2").classList.remove("modal-carousel2-activo");
    document.getElementById("modal").setAttribute("style", "visibility:hidden;")
  });

  //Validacion Formulario//
  const  input = document.querySelectorAll("#contacto input");
  const textarea = document.getElementById('message');
  textarea.addEventListener("keyup",validarFormulario);
  textarea.addEventListener("blur", validarFormulario);
  input.forEach(element => {
    element.addEventListener("keyup", validarFormulario);
    element.addEventListener("blur", validarFormulario);
  });

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\s\-:punct:.]{1,500}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  const campos = {
    email: false,
    name: false,
    message: false
  }

  function validarFormulario(e){
    switch(e.target.name){
      case "email":
        validarCampos(e.target.value, expresiones.correo, e.target.name);
        break;
      case "name":
        validarCampos(e.target.value, expresiones.nombre, e.target.name);
        break;
      case "message":
        validarCampos(e.target.value, expresiones.usuario, e.target.name);
        break;
    } 
  }
  
  function validarCampos(value, expresiones, nombre){
    if(!expresiones.test(value)){
    document.getElementById(nombre).classList.add("is-invalid");
    campos[nombre] =false;
    }else{
    document.getElementById(nombre).classList.remove("is-invalid");
    document.getElementById(nombre).classList.add("is-valid");
    campos[nombre] = true;
    }
  }

  document.getElementById("enviar").addEventListener("click", function(e){
    e.preventDefault();
      if(campos.name && campos.email && campos.message){
        setTimeout(function() {
          document.getElementById("email").value = "";
          document.getElementById("name").value = "";
          document.getElementById("message").value = "";
          document.getElementById("email").classList.remove("is-valid");
          document.getElementById("name").classList.remove("is-valid");
          document.getElementById("message").classList.remove("is-valid");
          document.getElementById("alert-danger").classList.remove("d-block");
          document.getElementById("alert-primary").classList.add("d-block"); 
          campos.email = false;
          campos.name = false;
          campos.message = false;
          }, 500);

        setTimeout(function(){
          document.getElementById("alert-primary").classList.remove("d-block");
        }, 2000)

      }else{
        document.getElementById("alert-danger").classList.add("d-block");
        document.getElementById("alert-primary").classList.remove("d-block");
        
        setTimeout(function(){
          document.getElementById("alert-danger").classList.remove("d-block");
        },1000) 
      }
  });
});