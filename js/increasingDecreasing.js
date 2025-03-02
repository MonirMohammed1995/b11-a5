let increaseText = document.getElementById("increaseText");
let decreaseText = document.getElementById("decreaseText");
let buttons = document.querySelectorAll(".actionBtn");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        increaseText.innerText = parseInt(increaseText.innerText) + 1;
        decreaseText.innerText = parseInt(decreaseText.innerText) - 1;
        button.disabled = true;
        alert("Updated Successfully");
    });
})