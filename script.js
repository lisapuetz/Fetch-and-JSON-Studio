// TODO: add code here
window.addEventListener('load', function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            const container = document.getElementById("container");
            let astronautList = '';
            for (let i in json) {
                astronautList += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li class = '${json[i].active}'>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                        <img class="avatar" src="${json[i].picture}">
                </div>
                 `
                i++
            }
            astronautList += `Count: ${json.length}`;
            container.innerHTML = astronautList;
        });
    });
});