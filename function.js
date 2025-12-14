const headText = document.getElementById("headText");
const input = document.getElementById("input");
const boxes = document.querySelectorAll(".out-box1 div");

const btngreet = document.getElementById("btn-greet");

const colors = ["red", "blue", "green", "yellow"];
boxes.forEach((box, index) => {
    box.style.backgroundColor = "white";
    box.style.color = "black"

    box.addEventListener('click', () => {
        if (box.style.backgroundColor === 'white') {
            box.style.color = "white"
            box.style.backgroundColor = colors[index];

            console.log(box, index)

        }

        else {
            box.style.color = "black"
            box.style.backgroundColor = 'white';
            console.log(box, index)

        } if (box.style.backgroundColor === "yellow") {
            box.style.color = "black"

        }

    })
});

btngreet.addEventListener("click", () => {
    if (input.value === "") {
        alert("Enter Your Name")
    } else {
        headText.innerText = headText.innerText + ", " + input.value + " Welcome😊";
    }

})