async function displayProjects() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
        const jsonResponse = await response.json();

        const projectToDisplay = [...jsonResponse]
        projectToDisplay.reverse()
        console.log(projectToDisplay[0].image)
        console.log(document.querySelectorAll(".projectBox img"))

       const projectImages = document.querySelectorAll(".projectBox img")
       for (i = 0; i < projectImages.length; i++) {
            projectImages[i].setAttribute("src", projectToDisplay[i].image)
       }


    } catch (err) {
        console.log("Couldn't fetch project API")
    }
}

displayProjects();
