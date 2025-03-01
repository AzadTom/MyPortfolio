/* android-container & web container */
const androidContainer = document.getElementById("androidContainer");
const webContainer = document.getElementById("webContainer");

let webContent = [
  {
    img: "./img/foodlux.png",
    name: "Foodlux",
    github: "https://github.com/AzadTom/FoodLux",
    live: "https://foodlux.netlify.app/",
  },
  {
    img: "./img/whiteboard.png",
    name: "WhiteBoard",
    github: "https://github.com/AzadTom/WhiteBoard-FrontEnd",
    live: "https://white-board-front-end.vercel.app/",
  },
  {
    img: "./img/gymrecord.jpeg",
    name: "GymRecord",
    live: "https://gymrecord.vercel.app/",
    github: "https://github.com/AzadTom/GYMRecord",
  },
  {
    img: "./img/luxeNust-img.png",
    name: "LuxeNest website",
    github: "https://github.com/AzadTom/RealState-React",
    live: "https://luxenest.netlify.app/",
  },
  {
    img: "./img/notes.png",
    name: "Collabrative Notes",
    github: "https://github.com/AzadTom/NoteTaking-Frontend",
    live: "https://colabrationnotes.netlify.app/",
  },
  {
    img: "./img/ecommerceb.png",
    name: "Ecommerce Webapplication",
    github: "https://github.com/AzadTom/REACT-ECOMMERCE",
    live: "https://boldx.netlify.app/",
  },
  {
    img: "./img/expenses.png",
    name: "Expense website",
    github: "https://github.com/AzadTom/ExpenseTracker",
    live: "https://maintainexpense.netlify.app/",
  },
  {
    img: "./img/neetflix.png",
    name: "Neetflix website",
    github: "https://github.com/AzadTom?tab=repositories",
    live: "https://neetflixo.netlify.app/",
  },
];

let androidContent = [
  {
    img: "./img/ecommerce.png",
    name: "Ecommerce Webapplication",
    live: "https://github.com/AzadTom/E_commerce/",
  },
  {
    img: "./img/movie.png",
    name: "Movie Application",
    live: "https://github.com/AzadTom/MDN-Pagination",
  },
  {
    img: "./img/Chat.png",
    name: "Chat Application",
    live: "https://github.com/AzadTom/Boss-ChatApplication-",
  },
  {
    img: "./img/News.png",
    name: "News Application",
    live: "https://github.com/AzadTom/BrowseNews",
  },
  {
    img: "./img/expens.png",
    name: "Expenses  Application",
    live: "https://github.com/AzadTom/Android-AddBill_App",
  },

  {
    img: "./img/reminder.png",
    name: "Reminder Application",
    live: "https://github.com/AzadTom/TODOReminder",
  },
];

function webContentRender(content) {
  if (Array.isArray(content)) {
    content.forEach((item) => {
      const divcontent = document.createElement("div");
      divcontent.classList.add("project-info");
      divcontent.innerHTML = `
            <div>
              <img src=${item.img} alt="img" lazy="loading" />
            </div>
            <div class="title">
              <div id="name">
              </div>      

             <div class="button-container">
              <a href="${item.live}" id="read-more">Live link</a>
              <a href="${item.github}" id="read-more">Github</a>
             </div>
            </div>
           
          `;

      webContainer.appendChild(divcontent);
    });
  }
}

function androidContentRender(content) {
  if (Array.isArray(content)) {
    content.forEach((item) => {
      const divcontent = document.createElement("div");
      divcontent.classList.add("project-info");
      divcontent.innerHTML = `
          <div>
            <img src=${item.img} alt="img" />
          </div>
          <div class="title">
            <div id="name">
            </div>
    
          
            <a href="${item.live}" id="read-more" target="_blank">Github</a>

          </div>
         
        `;

      androidContainer.appendChild(divcontent);
    });
  }
}

function initLoad(Content1, Content2) {
  webContentRender(Content1);
  androidContentRender(Content2);
}

window.addEventListener("load", () => {
  initLoad(webContent, androidContent);
});
