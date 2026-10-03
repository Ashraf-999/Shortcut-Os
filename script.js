const htmlTime = document.querySelector("#time");
const welcomeWindow = document.querySelector(".Welcome");
const welcomeOpen = document.querySelector("#welcomeOpen");
const welcomeClose = document.querySelector("#welcomeClose");

const Note = document.querySelector("#Note");
const NoteIcon = document.querySelector("#noteIcon");
const noteClose = document.querySelector("#noteClose");

const calIcon = document.querySelector("#calIcon");
const calculator = document.querySelector("#Calculator");
const calClose = document.querySelector("#calClose");
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const operator = document.querySelector("#operator");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");

function update_time() {
    var time = new Date().toLocaleString();
    htmlTime.innerHTML = time;
};

setInterval(update_time, 1000);

dragElement(document.getElementById("mydiv"));
dragElement(Note);
dragElement(document.getElementById("Calculator"))

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function openWindow(win) {
    win.classList.remove("hidden");
}

function closeWindow(win) {
    win.classList.add("hidden");
}

welcomeClose.addEventListener("click", function() {
    closeWindow(welcomeWindow);
})

welcomeOpen.addEventListener("click", function() {
    openWindow(welcomeWindow);
})



NoteIcon.addEventListener("click", function() {
    Note.classList.remove("hidden");
})

noteClose.addEventListener("click", function() {
    Note.classList.add("hidden");
})


calIcon.addEventListener("click", function() {
    calculator.classList.remove("hidden");
})

calClose.addEventListener("click", function() {
    calculator.classList.add("hidden");
})

function Operation(number1, operator, number2) {
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    } else if (operator === "*") {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    }
};

calculate.addEventListener("click", function() {
    num1 = parseFloat(number1.value);
    num2 = parseFloat(number2.value);
    op = operator.value;
    res = Operation(num1, op, num2);
    
    result.textContent = "Result: " + res;
});
