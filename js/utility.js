function getInputField(input){
    const inputField = document.getElementById(input);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    inputField.value = ""

    if(isNaN(inputFieldNumber)){
        alert ("please give a number");
    }
    else{
        return inputFieldNumber
    }
}
function getTotalField(input){
    const inputField = document.getElementById(input);
    const inputFieldString = inputField.innerText;
    const inputFieldNumber = parseFloat(inputFieldString);
    return inputFieldNumber
}
function totalField(input){
    const inputField = document.getElementById(input);
}