var inputs = document.querySelectorAll('.angle-input')
var button = document.querySelector('#btn')
var output = document.querySelector('#output')

button.addEventListener("click",isTriangle)


function calculateSumOfAngles(angle1,angle2,angle3){
    var sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

function isTriangle() {
    var sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))

    if(sumOfAngles === 180){        
        output.innerText = "This triangle is possible😀"
    }else{      
        output.innerText = "This triangle is not possible😥"
    }
};