async function displayProjects() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
        const jsonResponse = await response.json();

        const projectToDisplay = [...jsonResponse]
        projectToDisplay.reverse()
        const urlArray = [
            "/project-page/index.html?utm_source=project1",
            "/project-page/index.html?utm_source=project2",
            "/project-page/index.html?utm_source=project3"
        ]

       const projectImages = document.querySelectorAll(".projectBox img")
       const projectNames = document.querySelectorAll(".projectBox .bIntroMedium")
       const projectDescription = document.querySelectorAll(".projectBox .bHeadlineRegular")
       const projectUrl = document.querySelectorAll(".projectBox a")
       for (i = 0; i < projectImages.length; i++) {
            projectImages[i].setAttribute("src", projectToDisplay[i].image)
            projectNames[i].innerHTML = projectToDisplay[i].name
            projectDescription[i].innerHTML = projectToDisplay[i].description
            projectUrl[i].setAttribute("href", urlArray[i])
       }


    } catch (err) {
        console.log("Couldn't fetch project API")
    }
}

displayProjects();

//Import some JS parts
//Dynamic content with JS including SLUG
let  pageUTM //UTM
function getUtm () {
    let pageURL = document.URL
    pageURL = pageURL.split("utm_source=")
    pageUTM = pageURL[1]
}
getUtm();

async function dynamicProjectPage() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
        const jsonResponse = await response.json();
        const apiProjects = [...jsonResponse]
        apiProjects.reverse()
        
        let projectPageName = document.querySelector(".projectNameH1")
        const projectPageDescription = document.querySelector(".projectNameContainer div p")
        const projectPageDate = document.querySelector(".projectDate")
        const projectPageImg = document.querySelector(".projectContent .projectImage") //set attribute
        const projectPageContent = document.querySelector(".projectContent p")


        switch(pageUTM){
            case "project1":
                projectPageName.innerHTML = apiProjects[0].name
                projectPageDescription.innerHTML = apiProjects[0].description
                projectPageDate.innerHTML = apiProjects[0].completed_on
                projectPageImg.setAttribute("src", apiProjects[0].image)
                projectPageContent.innerHTML = apiProjects[0].content
                break;
            case "project2":
                projectPageName.innerHTML = apiProjects[1].name
                projectPageDescription.innerHTML = apiProjects[1].description
                projectPageDate.innerHTML = apiProjects[1].completed_on
                projectPageImg.setAttribute("src", apiProjects[1].image)
                projectPageContent.innerHTML = apiProjects[1].content
                break;
            case "project3":
                projectPageName.innerHTML = apiProjects[2].name
                projectPageDescription.innerHTML = apiProjects[2].description
                projectPageDate.innerHTML = apiProjects[2].completed_on
                projectPageImg.setAttribute("src", apiProjects[2].image)
                projectPageContent.innerHTML = apiProjects[2].content
                break
        }

    } catch (err){
        console.log("Error due to: ", err)
    }
}

dynamicProjectPage();