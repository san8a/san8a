window.addEventListener('scroll', function(){
 
    var imagen = document.querySelectorAll('.xd');

    for(i = 0; i <= imagen.length; i++ ){
        var altura = window.innerHeight/1.3;
    var distancia = imagen[i].getBoundingClientRect().top;

    imagen[i].classList.add('transform_left')

     if(distancia <= altura){

        imagen[i].classList.add('normal');

     }
     else{

        imagen[i].classList.remove('normal');

     }
    }
    
 
})


$(".menu-icon").click(function(){
    $(this).toggleClass("active");
    $(".navigation-menu").toggleClass("active");
    $(".menu-icon i").toggleClass("fa-times");
  });

  


 
  