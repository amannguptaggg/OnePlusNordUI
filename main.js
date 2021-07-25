(function(){

   window.addEventListener('DOMContentLoaded',function(){



    window.addEventListener('scroll',function(){
        let reveal = document.querySelectorAll('.reveal');


        for (let i = 0; i < reveal.length; i++) {
            let windowHeight = window.innerHeight;
            let reveltop = reveal[i].getBoundingClientRect().top;
            let revealPoint = 100;
            if(reveltop < windowHeight - revealPoint){
            reveal[i].classList.add('active');
            } else {
            reveal[i].classList.remove('active');
            }
            }
    })

    
    let overviewText = document.querySelectorAll(".overviewText p");
    let overimg = document.querySelector(".overviewImg img");
    
    let imgList = ["overImg4","overImg1","overImg2","overImg3",
                   "overImg4","overImg5","overImg6",
                   "overImg7"
];
    
    for (let i = 0; i < overviewText.length; i++) {
        const element = overviewText[i];
        element.addEventListener('mouseover',function(){
            element.classList.add('overActive');
            overimg.src=`./images/${imgList[i]}.jpg`;
            overimg.classList.add('overActive');
        });

        element.addEventListener('mouseout',function(){
            element.classList.remove('overActive');
        });
    }

   })

   
    
}())