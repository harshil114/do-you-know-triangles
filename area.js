const input = document.querySelectorAll('.angle-input')
const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

btn.addEventListener("click",calculateArea)

function calculateSumOfSide(a,b){
    const sumOfSide = a*b;
    return sumOfSide;
  

}
function calculateArea(){
    const sumOfSide = calculateSumOfSide(Number(input[0].value),Number(input[1].value));
    const areaOfTriangle = 1/2*sumOfSide;
    output.innerText = "Area of Triangle is "+areaOfTriangle
}