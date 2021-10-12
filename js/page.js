
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
    }
    if(section == "about_me")  document.querySelector("#about-content").style.display = "block";
    if(section == "skills")  document.querySelector("#skills-content").style.display = "block";
    if(section == "portfolio")  document.querySelector("#portfolio-content").style.display = "block";
}

function showContact(){
    document.querySelector("#conatct").style.opacity = 1;
}