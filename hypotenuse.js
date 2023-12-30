const input = document.querySelectorAll('.angle-input')
const btn = document.querySelector('#btn')
const output = document.querySelector('#output')

btn.addEventListener("click",calculateHypotenuse)


function calculateSumOfSquare(a,b){
    const sumOfSquare = a*a+b*b;
    return sumOfSquare;

}
function calculateHypotenuse(){
    const sumOfSquare = calculateSumOfSquare(Number(input[0].value),Number(input[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
    output.innerText = "Length of Hypotenuse is "+lengthOfHypotenuse    
}