const observer = new IntersectionObserver((entries)=>{


    entries.forEach((entry)=> {

            if(entry.isIntersecting){

                entry.target.classList.add('show');
            }
            else{

                entry.target.classList.remove('show');

            }

    } );

});

const  hidden = document.querySelectorAll('.hidden');

hidden.forEach((e1)=> observer.observe(e1));








