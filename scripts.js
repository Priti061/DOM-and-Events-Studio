// Write your JavaScript code here.
// const shuttleTakeoff= document.getElementById("takeoff");
// const flightStatus= document.getElementById("flightStatus");
window.addEventListener('load', function(){
let rocketPosX = 0;
let rocketPosY = 0;
let altitude= 0;
const shuttleTakeoff= document.getElementById("takeoff");
const flightStatus= document.getElementById("flightStatus");
const shuttlebackground= document.getElementById("shuttleBackground");
const spaceShuttleHeight= document.getElementById("spaceShuttleHeight");
const landButton= document.getElementById("landing");
const abortMission= document.getElementById("missionAbort");
const rocket = document.getElementById("rocket");

    shuttleTakeoff.addEventListener('click', function() {
    console.log("takeoff");
        let response= window.confirm("Confirm that the shuttle is ready for takeoff");
        console.log(response)
        if(response===true) {
            flightStatus.innerHTML= "Shuttle in flight.";
            shuttlebackground.style.backgroundColor= "blue";
            altitude= 10000;
            spaceShuttleHeight.innerHTML= altitude;
        }
    
});

    landButton.addEventListener('click', function() {
        alert("The shuttle is landing. Landing gear engaged.");
        
            flightStatus.innerHTML= "The shuttle has landed.";
            shuttlebackground.style.backgroundColor= "green";
            altitude = 0;
            spaceShuttleHeight.innerHTML= altitude;

        });
        
    
    abortMission.addEventListener('click', function() {

        let response= window.confirm("Confirm that you want to abort the mission.");
        
        if(response) {
            flightStatus.innerHTML= "Mission aborted.";
            shuttlebackground.style.backgroundColor= "green";
            altitude = 0;
            spaceShuttleHeight.innerHTML= altitude;
        }
    });

    document.addEventListener("click", function(event){
        if(event.target.id === "left") {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px'; 
        }
        if (event.target.id === "right") {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';

        }
        if (event.target.id === "up") {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }

        if (event.target.id === "down") {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }


    });
});



// Remember to pay attention to page loading!
