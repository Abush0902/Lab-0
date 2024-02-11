console.log("test");
for(let i = 0; i< 5; i++){
    console.log(i+"\n");
}

function Sum(){
    let a = [1, 2, 3];
    let total = 0;
    for(let i = 0; i< 5; i++){
        total += i;
    }
    return total;
}

// test the logging on console by:
// right clicking anywhere in the page. 
// then click "inspect"
// the browser open up a source code page that
// has multiple tabs, click on "Console" 
// and test the code in the console.

console.log("Array sum: "+Sum());

var emailTextBox = document.getElementById("email");
var feedbackTextBox = document.getElementById("feedback");
var button2 = document.getElementById("button2");
var myText = document.getElementById("myTextArea");
var submitButton =document.getElementById("mybutton");
button2.onclick = function printText(){
myText.value = emailTextBox.value;
myText.value+="\n"+  feedbackTextBox.value;
myText.value += "\nArray sum: "+ Sum();
}

submitButton.onclick = function printAlert(){
    alert(emailTextBox.value+ "\n"+  feedbackTextBox.value);
}



