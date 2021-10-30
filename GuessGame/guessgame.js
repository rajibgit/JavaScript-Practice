
var numberofwon = 0;
var numberoflost = 0;
for(var i=1; i<=5; i++){

    var guessNumber = parseInt(prompt("Enter a Number from 1 to 5 : "));
var randomNymber = Math.floor(Math.random()*5) + 1;

if(guessNumber==randomNymber){
    console.log("You Have Won");
    numberofwon++;

}else{
    console.log("You Have Lost. Random Number Was " +randomNymber);
    numberoflost++;
}

}
document.write("Number of Won = " + numberofwon + "<br>");
document.write("Number of Lost = " + numberoflost + "<br>");