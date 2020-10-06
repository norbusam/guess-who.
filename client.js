console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded');

    // append idvs for all in people array
   appendPeople();
   pickRandomPerson();
};// end of onReady

function appendPeople() {
    people.forEach(function(person){
        console.log("person", person);
    $('#githubPeople').append(`
        <div>
            <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        </div>
    `)
   })// end of loop
}// end of appendPeople

function pickRandomPerson(){
   let randomNum = randomNumber(0, people.length - 1);
   console.log(randomNum);

   $('#person').append(people[randomNum].name);
}//end of pickRandomPerson

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}//end of randomNumber