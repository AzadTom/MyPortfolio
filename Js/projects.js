/* android-container & web container */
const  androidContainer = document.querySelector("#android-container");
const webContainer = document.getElementById("webContainers");



let  webContent = [{
    img : "./img/ecommerceb.png",
    name : "Ecommerce Webapplication",
    overview : " This application is built with React/conextApi and mockBackend with miragJs & tailwindCss",
    description :"I implemented feature such as authentication/landingPage and cart feature & favourite  and deatail page as well.",
    live:"https://boldx.netlify.app/"
},
{
    img : "./img/neetflix.png",
    name : "Neetflix website",
    overview : "  This application is built with React and used rest api from Tmdb database.",
    description :"I implemented home page with different genre of movie show when page is loaded..",
    live:"https://neetflixo.netlify.app/"
}]

function webContentRender(content){


    console.log("I am inside")

    if(Array.isArray(content)){
 
        content.forEach((item)=>{


         

            const  divcontent = document.createElement('div');
            divcontent.classList.add('project-info');
            divcontent.innerHTML = `
            <div>
              <img src=${item.img} alt="img" />
            </div>
            <div class="title">
              <div id="name">
                <h2>${item.name}</h2>
                <img src="./img/right-arrow.png" alt="img" id="project-img" />
              </div>
      
              <p>
              ${item.overview}
      
              </p>
              <p>${item.description}</p>
              <a href=${item.live} id="read-more" target="_blank"
                >Live link</a
              >
            </div>
           
          `;
      
      
          webContainer.appendChild(divcontent);
        
    
         });


    }

    




}



function initLoad(Content){

    
    console.log(Content);
    webContentRender(Content);

}


window.addEventListener('load',( )=>{

    initLoad(webContent);
})