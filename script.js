const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
//document.querySelector("body").appendChild(h2);

const courierSelect = document.getElementById("Courier");

courierSelect.addEventListener("click", function(e){
    if(e.type==="click"){
        
        //unbold other options
        const fontElements = document.querySelectorAll("#fontChange > *");
        for(let i = 0; i < fontElements.length; i++){
            fontElements[i].style.fontWeight = 'normal';
        }
        
        
        const elementList = document.querySelectorAll(".content > *");
        
        for(let i = 0; i < elementList.length; i++){
            elementList[i].style.fontFamily="'Courier New', Courier, monospace";
        }

        courierSelect.style.fontWeight="bold";

    }
})

const timesSelect = document.getElementById("Times");

timesSelect.addEventListener("click", function(e){
    if(e.type==="click"){
        
        //unbold other options
        const fontElements = document.querySelectorAll("#fontChange > *");
        for(let i = 0; i < fontElements.length; i++){
            fontElements[i].style.fontWeight = 'normal';
        }

        // change font of all content elements
        const elementList = document.querySelectorAll(".content > *");
        
        for(let i = 0; i < elementList.length; i++){
            elementList[i].style.fontFamily="'Times New Roman', Times, serif";
        }

        // bold selected option
        timesSelect.style.fontWeight="bold";
    }
})

const arialSelect = document.getElementById("Arial");

arialSelect.addEventListener("click", function(e){
    if(e.type==="click"){
        
        //unbold other options
        const fontElements = document.querySelectorAll("#fontChange > *");
        for(let i = 0; i < fontElements.length; i++){
            fontElements[i].style.fontWeight = 'normal';
        }

        // change font of all content elements
        const elementList = document.querySelectorAll(".content > *");
        
        for(let i = 0; i < elementList.length; i++){
            elementList[i].style.fontFamily="Arial, Helvetica, sans-serif";
        }

        // bold selected option
        arialSelect.style.fontWeight="bold";
    }
})



//point cursor on hover over font options

const fontOptionElements = document.getElementsByClassName("fontOption");

for(let i = 0; i < fontOptionElements.length; i++){
    fontOptionElements[i].addEventListener("mouseenter", function(e){
        document.body.style.cursor = 'pointer';
    })
    fontOptionElements[i].addEventListener("mouseleave", function(e){
        document.body.style.cursor = 'auto';
    })
}


//
const projectCardList = document.getElementsByClassName("projectCard");
const projectDescriptionList = document.getElementsByClassName("projectDescription");

for(let i = 0; i < projectCardList.length; i++){
    projectCardList[i].addEventListener("click", function(e){
        
        console.log(projectDescriptionList[i].style.display)
        if (projectDescriptionList[i].style.display){
            projectDescriptionList[i].style.display = "";
        } else {
            projectDescriptionList[i].style.display = "block";

        }
        
    })
}