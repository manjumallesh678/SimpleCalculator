let running = 0;
let buffer = "0";
let previewsOperator;
let equal = false;
const screen = document.querySelector(".screen");
document.querySelector(".calc-body").addEventListener("click",function(event){
    ButtonClick(event.target.innerText);
});
function ButtonClick(value){
    if(isNaN(parseInt(value))){
        HandleSymbol(value);
    }
    else{
        if(equal){
            equal = false;
            buffer = "0";
            rerender();
        }
        HandleNumber(value);
    }
}
function HandleSymbol(value){
    if(value === "C"){
        buffer = "0";
    }
    else if (value === "←"){
        if(buffer.length == 1){
            buffer = "0";
        }
        else{
            buffer = buffer.substring(0,buffer.length - 1);
        }
    }
    else if(value === "="){
        equal = true;
        switch(previewsOperator){
            case '+': buffer = running + parseInt(buffer);
            break;
            case '-':buffer =  running - parseInt(buffer); 
            break;
            case 'x': buffer = running * parseInt(buffer);
            break;
            case '÷': if(parseInt(buffer) !== 0){
                buffer = running / buffer;
            }
            else{
                alert("you can't divide by 0 or math error");
            }
            break;
        }
    }
    else{
        if(value !== "←"){
            previewsOperator = value;
            running = parseInt(buffer);
            buffer = "0";
        }
        else{
            previewsOperator = "0";
        }
    }
    rerender();
}
function HandleNumber(value){
    if(buffer === "0"){
        buffer = value;
    }
    else{
        buffer += value;
    }
    rerender();
}
function rerender(){
    screen.innerText = buffer;
}