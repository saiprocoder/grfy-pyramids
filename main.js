console.log("Pyramids of Giza");

function Welcome() {
    var a=prompt("Welcome to Team Gryffindor's project on Pyramids of Giza! Type S, to see the slides. Type W, to see the HTML project.");

        if(a=="S") {
            window.location.href="https://docs.google.com/presentation/d/1QcdxzXKEZN8sHK2XGOXvhXyR_POy1sWyEpd_xyUMx4Q/present?slide=id.g35f391192_00"
        }

        if(a=="W") {
            window.location.href="content.html"
        }
        
        else {
            alert("Type the correct letter. If you have typed the correct letter, type the correct letter at Upper Case!");
            window.location.href="index.html"
        }
}

Welcome();