const h1 = document.querySelector(".hello h1")

h1.addEventListener("click", () => {
    h1.classList.toggle("active");
}) // active가 h1의 classList에 존재한다면 제거하고, 그렇지 않다면 추가한다.

h1.addEventListener("mouseenter", () => {
    h1.textContent = "Mouse is here!"
})

h1.addEventListener("mouseleave", () => {
    h1.textContent = "Oh my God!"
})

// console.log(h1);
