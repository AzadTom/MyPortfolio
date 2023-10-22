const tabsContainer = document.querySelector(".tabContainer");
const tabsList = tabsContainer.querySelector("ul");
const  tabsButtons = tabsList.querySelectorAll("a");

const tabsContent = tabsContainer.querySelectorAll(".tabsContents > div");



  


tabsList.setAttribute("role","tablist");


tabsList.querySelectorAll("li").forEach((item)=>{
    item.setAttribute("role","presentation");
})


tabsButtons.forEach((tab,index)=>{


    if(index===0){

      tab.setAttribute("aria-selected",true)

    }else{

         tab.setAttribute("tabindex","-1");
        tabsContent[index].setAttribute("hidden","");

    }

})



tabsContent.forEach((item)=>{
    item.setAttribute("tabindex","0");

})

tabsContainer.addEventListener("click",(e)=>{

    
    const clickedTab = e.target.closest("a");

    
    
    if(!clickedTab) return;
    
    e.preventDefault( );

   switchTab(clickedTab);

})




function switchTab(newTab){

    const activePanelId = newTab.getAttribute("href");

    const activePanel = tabsContainer.querySelector(activePanelId);


    tabsButtons.forEach((button)=>{

        button.setAttribute("aria-selected",false);
        button.setAttribute("tabindex","-1");

    })

    tabsContent.forEach((panel)=>{

        panel.setAttribute("hidden",true);

    })

    activePanel.removeAttribute("hidden");
    newTab.setAttribute("aria-selected",true);
    newTab.setAttribute("tabindex","0")
    newTab.focus()

}

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


