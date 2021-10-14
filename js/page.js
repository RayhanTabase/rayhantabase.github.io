
document.addEventListener('DOMContentLoaded', function(){
   document.querySelectorAll(".link-btn").forEach(btn=>{
       btn.addEventListener("click",()=>showContent(btn.name))
   })
});


function showContent(section){
    console.log(section)
    document.querySelectorAll(".main-content").forEach(content=>{
        content.style.display = "none";
    });
    if(section == "home"){
        document.querySelector("#home-content").style.display = "block";
        document.querySelector("#conatct").style.opacity = 0;
        document.querySelector("body").style.background = "rgb(222, 100, 73)";
    }
    if(section == "about_me"){
        document.querySelector("#about-content").style.display = "block";
        document.querySelector("body").style.background = "#8D6A9F";
    } 
    if(section == "skills"){
        document.querySelector("#skills-content").style.display = "block";
        document.querySelector("body").style.background = "#577590";
    } 
    if(section == "portfolio"){
        document.querySelector("#portfolio-content").style.display = "block";
        document.querySelector("body").style.background = "#087F8C";
    }  
}

function showContact(){
    document.querySelector("#conatct").style.opacity = 1;
}