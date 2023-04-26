function createKeyBoard() {
  //create element
  let keyContainer = document.createElement("div");
  let title = document.createElement("h1");
  let textarea = document.createElement("textarea");
  let keyBoard = document.createElement("div");
  let messageOfsystem = document.createElement("p");
  let changeLang = document.createElement("p");

  //clases element
  keyContainer.className = "content";
  title.className = "title";
  textarea.className = "content__textarea textarea";
  keyBoard.className = "keyboard__content keyboard";
  messageOfsystem.className = "description";
  changeLang.className = "language";

  // id element
  textarea.id = "textarea";
  keyBoard.id = "keyboard";

  //text to element
  title.textContent = "RSS Виртуальная клавиатура";
  messageOfsystem.textContent = "Клавиатура создана на ОС 'Windows'";
  changeLang.textContent =
    "Переключить язык ввода можно с помощью клавиш 'ctrl' + 'alt'";

  // create html DOM
  document.body.appendChild(keyContainer);
  keyContainer.appendChild(title);
  keyContainer.appendChild(textarea);
  keyContainer.appendChild(keyBoard);
  keyContainer.appendChild(messageOfsystem);
  keyContainer.appendChild(changeLang);
}

document.addEventListener("DOMContentLoaded", createKeyBoard);
