/* android-container & web container */
const  androidContainer = document.getElementById("androidContainers");
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



let androidContent = [{
  img : "./img/ecommerce.png",
  name : "Ecommerce Webapplication",
  overview : "  This app used Jetpack compose for UI & Kotlin and Firebase for backend ",
  live:"https://github.com/AzadTom/E_commerce/"
},
{
  img : "./img/movie.png",
  name : "Movie Application",
  overview : ` This project is based on TMDB API using retrofit to fetch a
  list of data display on homescreen where you see a lot of
  movie after clicking you will go to other screen called
  detailscreen and also i used pagination & swipeRefreshLayoutd `,
  live:"https://github.com/AzadTom/MDN-Pagination"
},
{
  img : "./img/Chat.png",
  name : "Chat Application",
  overview : "   This app used XML for UI & Kotlin and Firebase for backend",
  live:"https://github.com/AzadTom/Boss-ChatApplication-"
},
{
  img : "./img/News.png",
  name : "News Application",
  overview : "    This app used XML for UI & Kotlin and Firebase for backend",
  live:"https://github.com/AzadTom/BrowseNews"
},
{
  img : "./img/expens.png",
  name : "Expenses  Application",
  overview : "This app used XML for UI & Kotlin and Local storage as database implemented by Room Library ",
  live:"https://github.com/AzadTom/Android-AddBill_App"
},

{
  img : "./img/reminder.png",
  name : "Reminder Application",
  overview : "  This app used XML for UI & Kotlin and Local storage as database and implemented AlarmManager as well",
  live:"https://github.com/AzadTom/TODOReminder"
},]

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

function androidContentRender(content){


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
            <a href=${item.live} id="read-more" target="_blank"
              >Live link</a
            >
          </div>
         
        `;
    
    
        androidContainer.appendChild(divcontent);
      
  
       });


  }

  




}



function initLoad(Content1,Content2){

    webContentRender(Content1);
    androidContentRender(Content2);

}


window.addEventListener('load',( )=>{

    initLoad(webContent,androidContent);

})