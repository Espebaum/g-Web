const num = document.querySelector("input");
const btn = document.querySelector("button");
const param = document.querySelector("p");

btn.addEventListener("click", showOutput)

function showOutput() {
    let input = num.value;
    num.value = "";
    num.focus();
    for (let i = 1; i <= input; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue
        }
        param.textContent += i + " ";
    }
}
