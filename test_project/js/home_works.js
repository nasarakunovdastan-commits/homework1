// 1.1

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
   if (gmailRegex.test(gmailInput.value)) {
      gmailResult.textContent = "Gmail правильный!";
      gmailResult.style.color = "green";
   } else {
      gmailResult.textContent = "Gmail неправильный!";
      gmailResult.style.color = "red";
   }
};

// 1.2

const childBlock = document.querySelector(".child_block");

let position = 0;
let direction = 1;

function moveBlock() {
    position += direction;

    childBlock.style.left = `${position}px`;

    if (position >= 448) {
        direction = -1;
    }

    if (position <= 0) {
        direction = 1;
    }

    requestAnimationFrame(moveBlock);
}

moveBlock();