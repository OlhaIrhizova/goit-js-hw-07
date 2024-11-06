function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0) }`;
  }
  const span = document.querySelector(".color");
  const button = document.querySelector(".change-color");
  const body = document.body;

  function handlerClick()  {
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = span.textContent;
  };

  button.addEventListener("click", handlerClick );
 
