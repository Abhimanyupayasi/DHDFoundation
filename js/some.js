        // Get the username from the URL parameter
        var urlParams = new URLSearchParams(window.location.search);
        var username = urlParams.get('username');

        // Set the heading based on the username
        if (username === "abhimanyupayasi") {
            document.getElementById("welcomeHeading").innerText = "Welcome Mr. Abhimanyu Payasi";
            let imageElement = document.querySelector(".change-img");
            imageElement.src = "https://scontent.fjlr1-1.fna.fbcdn.net/v/t39.30808-6/415552891_393610576463081_4309017512772737411_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=APMxSP87Q8MAX8Ur6Yu&_nc_ht=scontent.fjlr1-1.fna&oh=00_AfACuipV2vPM8K1t2NkHyRV2QSY6Pj7kE23AUHoN5gSOtg&oe=65AB34A9";
        } else if (username === "shanpandey") {
            document.getElementById("welcomeHeading").innerText = "Welcome Mr. Shan Pandey";
            let imageElement = document.querySelector(".change-img");
            imageElement.src = "https://lh3.googleusercontent.com/a-/ALV-UjUzuim_8Jz3Cqxj472kvkXdGvOHXJgKyJVAuwMksx3_Kw=w81-h81-p-rp-mo-br100";
        }
        else if (username === "dream-hope") {
            document.getElementById("welcomeHeading").innerText = "Welcome Again Member";
            
        }
        
        else {
            // Default welcome message
            document.getElementById("welcomeHeading").innerText = "Welcome";
           let authWrong = document.querySelector(".main");
           authWrong.style.display = "none";
           let wrong = document.querySelector(".header");
              wrong.style.display = "none";
        let see = document.querySelector(".NoAuth");
        see.style.display = "flex";
        }
