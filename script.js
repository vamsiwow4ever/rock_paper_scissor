const gameContainer= document.querySelector(".container"),
userResult= document.querySelector(".user_result img"),
cpuResult= document.querySelector(".cpu_result img"),
result= document.querySelector(".result"),
optionImages= document.querySelectorAll(".option_image");

// Initial scores
let playerScore = 0;
let cpuScore = 0;

// Get score elements
const playerScoreElement = document.getElementById("player-score");
const cpuScoreElement = document.getElementById("cpu-score");


optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        optionImages.forEach((image2, index2) => {
            index!==index2 && image2.classList.remove("active")            
        });

        gameContainer.classList.add("start");


        let time = setTimeout(()=>{
            gameContainer.classList.remove("start");
            let imageSrc=e.target.querySelector("img").src;
            userResult.src=imageSrc;
        

            let randomNumber= Math.floor(Math.random()*3)
            
            let cpuImages=["C:\\Users\\vamsi\\OneDrive\\Desktop\\New_folder\\project_game\\rock.jpg", "C:\\Users\\vamsi\\OneDrive\\Desktop\\New_folder\\project_game\\paper.png", "C:\\Users\\vamsi\\OneDrive\\Desktop\\New_folder\\project_game\\scissor.png"]
            cpuResult.src=cpuImages[randomNumber];

            let cpuValue=["R","P","S"][randomNumber];
            let userValue=["R","P","S"][index];

            let outcomes = {
                RR: "Draw",  // Rock vs Rock
                RP: "CPU",   // Rock vs Paper (CPU wins)
                RS: "USER",  // Rock vs Scissors (User wins)
                PP: "Draw",  // Paper vs Paper
                PR: "USER",  // Paper vs Rock (User wins)
                PS: "CPU",   // Paper vs Scissors (CPU wins)
                SS: "Draw",  // Scissors vs Scissors
                SP: "USER",  // Scissors vs Paper (User wins)
                SR: "CPU"    // Scissors vs Rock (CPU wins)
            };
            

            let outComeValue=outcomes[userValue+cpuValue];

            result.textContent = userValue == cpuValue ? "Match Draw" : `${outComeValue} Won!!`

            // Update scores based on the outcome
            if (outComeValue === "USER") {
                playerScore++;
            } else if (outComeValue === "CPU") {
                cpuScore++;
            }

            // Update score elements on the page
            playerScoreElement.textContent = playerScore;
            cpuScoreElement.textContent = cpuScore;
        },400)
        
    });
});
