let input = document.getElementsByTagName("input")[0];
let btn = document.getElementsByTagName("button")[0];
let output = document.getElementById("output");

console.log("Anoo[")

function reverse() {
    let reverseString;
    input = input.value;

    let word = input.split('');
    let array = new Array(...word);
    reverseString = array.reverse();

    output.innerHTML = reverseString.join('');
}
btn.addEventListener("click", () => {
    setTimeout(reverse, 2000);
});