function createKeyBoard() {
  // create element
  const keyContainer = document.createElement('div');
  const title = document.createElement('h1');
  const textarea = document.createElement('textarea');
  const keyBoard = document.createElement('div');
  let keyBoardRow;
  // const keyBoardRow = document.createElement('div');
  const messageOfsystem = document.createElement('p');
  const changeLang = document.createElement('p');

  // clases element
  keyContainer.className = 'content';
  title.className = 'title';
  textarea.className = 'content__textarea textarea';
  keyBoard.className = 'keyboard__content keyboard';
  // keyBoardRow.className = 'keyboard__row';
  messageOfsystem.className = 'description';
  changeLang.className = 'language';

  // id element
  textarea.id = 'textarea';
  keyBoard.id = 'keyboard';

  // text to element
  title.textContent = 'RSS Виртуальная клавиатура';
  messageOfsystem.textContent = "Клавиатура создана на ОС 'Windows'";
  changeLang.textContent = "Переключить язык ввода можно с помощью клавиш 'ctrl' + 'alt'";

  // create html DOM
  document.body.appendChild(keyContainer);
  keyContainer.appendChild(title);
  keyContainer.appendChild(textarea);
  // keyBoard.appendChild(keyBoardRow);
  keyContainer.appendChild(keyBoard);
  keyContainer.appendChild(messageOfsystem);
  keyContainer.appendChild(changeLang);

  // for(let j = 0; j<5; j++) {
  //   keyBoardRow = document.createElement('div');
  //   keyBoardRow.className = 'keyboard__row';
  //   keyBoard.appendChild(keyBoardRow);
  // }

  function init() {
    let out = '';
    for (let j = 0; j < 5; j++) {
      keyBoardRow = document.createElement('div');
      keyBoardRow.className = 'keyboard__row';
      keyBoard.appendChild(keyBoardRow);
      for (let i = 0; i < keyCodeArr[j].length; i++) {
        out += `<div data="${keyCodeArr[j][i]}" class="keyboard__key key ${keyCodeArr[j][i]}"><span class="ru hidden"><span class="case__down hidden">${objKeyRusLower[keyCodeArr[j][i]]}</span><span class="case__up hidden">${objKeyRusCapsl[keyCodeArr[j][i]]}</span><span class="caps__l hidden">${objKeyRusCapsl[keyCodeArr[j][i]]}</span><span class="shift__l hidden">${objKeyRusShiftM[keyCodeArr[j][i]]}</span></span><span class="eng"><span class="case__down">${objKeyEnLower[keyCodeArr[j][i]]}</span><span class="case__up hidden">${objKeyEnCapsL[keyCodeArr[j][i]]}</span><span class="caps__l hidden">${objKeyEnCapsL[keyCodeArr[j][i]]}</span><span class="shift__l hidden">${objKeyEnShift[keyCodeArr[j][i]]}</span></span></div>`;
      }
      keyBoardRow.innerHTML = out;
      out = '';
    }
  }
  init();
  
  // document.querySelectorAll('.keyboard__key').forEach(function(element) {
  //   element.onclick = function(event) {element.classList.remove('active');
  //   let code = element.getAttribute('data');
  
  //   console.log(code);
  //   }
  //   });

  document.querySelectorAll('.keyboard__key').forEach(function(element) {
    element.onclick = function(event) {
      document.querySelectorAll('.keyboard__key').forEach(function(element) {
        element.classList.remove('active');
      })
    let code = this.getAttribute('data');
  this.classList.add('active')
    console.log(code);
  
    }
    
    });

    
    const keyboardEL = document.querySelector('.keyboard');
    const textareaEl = document.querySelector('.textarea');
    keyboardEL.addEventListener('click', function(event) {
       textareaEl.focus();
       let key;
      console.log(event.target.className); 
       if(event.target.classList.contains('keyboard__key')) 
       {
      
          key = event.target.childNodes;
          // console.log(key);

          for(let k of key) {
            // console.log(k);
            if(!k.classList.contains('hidden')) {
              key = k.childNodes;
             for(let span of key) {
              if(!span.classList.contains('hidden')) {
                key = span.textContent;
                // console.log(key);
              }
             }
            }
          }
       } else {
           key = event.target.textContent;
       }

          console.log(key)
          if (key.length === 1 && !(event.target.closest('.ArrowLeft') || event.target.closest('.ArrowUp') || event.target.closest('.ArrowDown') || event.target.closest('.ArrowRight'))) {
             textareaEl.value += key;
          }

        if(event.target.closest('.Backspace')) {
          textareaEl.value = textareaEl.value.slice(0, -1);
        }

        if(event.target.closest('.Enter')) {
          textareaEl.value += '\n';
        }

        if(event.target.closest('.Tab')) {
          textareaEl.value += '\t';
        }

        if(event.target.closest('.Space')) {
          textareaEl.value += ' ';
        }
        
        if(event.target.closest('.Delete')) {
          let cursor = textareaEl.selectionStart;
          if(cursor === 0) {
            textareaEl.value = textareaEl.value.slice(1);
            textareaEl.selectionStart = textareaEl.selectionEnd = 0;
          } else if(cursor === textareaEl.value.length -1) {
            let size = textareaEl.value.length - 1;
            textareaEl.value = textareaEl.value.slice(0, size);
          } else if(cursor === textareaEl.value.length) {
            textareaEl.value = textareaEl.value;
          } else {
            textareaEl.value = textareaEl.value.slice(0, cursor) + textareaEl.value.slice(cursor + 1);
            textareaEl.selectionStart = textareaEl.selectionEnd = cursor;
          }
        }

        if(event.target.closest('.ArrowRight')) {
        
          let cursor = textareaEl.selectionStart;
          if(cursor) {
            textareaEl.selectionStart = textareaEl.selectionEnd = cursor + 1;
          }
        }

        if(event.target.closest('.ArrowLeft')) {
        
          let cursor = textareaEl.selectionStart;
          if(cursor) {
            textareaEl.selectionStart = textareaEl.selectionEnd = cursor - 1;
          }
        }

        if(event.target.closest('.ArrowDown')) {
          console.log(event.target);
          let cursor = textareaEl.selectionStart;
          let newStr = '';
          if(textareaEl.value.indexOf('\n') != -1) {
           newStr = textareaEl.value.indexOf('\n', cursor)
          }
          textareaEl.selectionStart = textareaEl.selectionEnd = newStr ? newStr + cursor + 1 : cursor;
        }

        if(event.target.closest('.ArrowUp')) {
          console.log(event.target);
          let cursor = textareaEl.selectionStart;
          let newStr = '';
          if(textareaEl.value.indexOf('\n') != -1) {
           newStr = textareaEl.value.indexOf('\n', cursor - 1)
          }
          textareaEl.selectionStart = textareaEl.selectionEnd = newStr ? newStr : cursor;
        }
        
        })

        
      //   document.addEventListener('keydown', (e) => {
      //     if (e.target.closest('.ControlLeft') && e.target.closest('.AltLeft')) {
      //        let keys = document.querySelectorAll('.ru');
      //        keys.forEach((key) => {
      //           if (key.classList.contains('hidden')) {
      //              key.classList.remove('hidden');
      //              document.querySelectorAll('.eng').classList.add('hidden');
      //           } else {
      //              key.classList.add('hidden');
      //              document.querySelectorAll('.eng').classList.remove('hidden');
      //           }
      //        });
      //     }
      //  });

}

document.addEventListener('DOMContentLoaded', createKeyBoard);

// let eKey = [];
// // event at the meeting key
// document.addEventListener('keydown', (e) => {
//   console.log(e.key, e.code)
//   eKey.push(e.code);
//   console.log(eKey);

//   })

// event when released key
// document.addEventListener('keyup', (e) => {
//   console.log(e.key, e.code)
//   })

const keyEnLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

const keyEnCapsL = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

const keyEnShift = ['~', '!', '@', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

const keyRusLower = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

const keyRusCapsL = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

const keyRusShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];

const keyCodeArr = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'], ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'], ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'], ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'], ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown','ArrowRight', 'ControlRight']];

const objKeyRusShift = {
  Backquote: ['Ё'], Digit1: ['!'], Digit2: ['"'], Digit3: ['№'], Digit4: [';'], Digit5: ['%'], Digit6: [':'], Digit7: ['?'], Digit8: ['*'], Digit9: ['('], Digit0: [')'], Minus: ['_'], Equal: ['+'], Backspace: ['Backspace'], Tab: ['Tab'], KeyQ: ['Й'], KeyW: ['Ц'], KeyE: ['У'], KeyR: ['К'], KeyT: ['Е'], KeyY: ['Н'], KeyU: ['Г'], KeyI: ['Ш'], KeyO: ['Щ'], KeyP: ['З'], BracketLeft: ['Х'], BracketRight: ['Ъ'], Backslash: ['/'], Delete: ['Delete'], CapsLock: ['CapsLock'], KeyA: ['Ф'], KeyS: ['Ы'], KeyD: ['В'], KeyF: ['А'], KeyG: ['П'], KeyH: ['Р'], KeyJ: ['О'], KeyK: ['Л'], KeyL: ['Д'], Semicolon: ['Ж'], Quote: ['Э'], Enter: ['Enter'], ShiftLeft: ['Shift'], KeyZ: ['Я'], KeyX: ['Ч'], KeyC: ['С'], KeyV: ['М'], KeyB: ['И'], KeyN: ['Т'], KeyM: ['Ь'], Comma: ['Б'], Period: ['Ю'], Slash: [','], ArrowUp: ['ArrowUp'], ShiftRight: ['Shift'], ControlLeft: ['Control'], MetaLeft: ['Meta'], AltLeft: ['Alt'], Space: [' '], AltRight: ['Alt'], ControlRight: ['Control'], ArrowLeft: ['ArrowLeft'], ArrowRight: ['ArrowRight'], ArrowDown: ['ArrowDown'],
};

const keyCodeArray = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft','ArrowDown','ArrowRight', 'ControlRight'];

let objKeyRusCapsl = {};
for (let i = 0; i < keyCodeArray.length; i++) {
  objKeyRusCapsl[keyCodeArray[i]] = keyRusCapsL[i];
}
console.log(objKeyRusCapsl);

let objKeyRusLower = {};
for (let i = 0; i < keyCodeArray.length; i++) {
  objKeyRusLower[keyCodeArray[i]] = keyRusLower[i];
}
console.log(objKeyRusLower);

const objKeyRusShiftM = {};
for (let i = 0; i < keyCodeArray.length; i++) {
  objKeyRusShiftM[keyCodeArray[i]] = keyRusShift[i];
}
console.log(objKeyRusShiftM);

let objKeyEnShift = {};
for (let i = 0; i < keyCodeArray.length; i++) {
  objKeyEnShift[keyCodeArray[i]] = keyEnShift[i];
}
console.log(objKeyEnShift);

let objKeyEnCapsL = {};
for (let i = 0; i < keyCodeArray.length; i++) {
  objKeyEnCapsL[keyCodeArray[i]] = keyEnCapsL[i];
}
console.log(objKeyEnCapsL);

let objKeyEnLower = {};
for (let i = 0; i < keyCodeArray.length; i++) {
  objKeyEnLower[keyCodeArray[i]] = keyEnLower[i];
}
console.log(objKeyEnLower);

console.log(keyEnLower.length);
console.log(keyEnCapsL.length);
console.log(keyEnShift.length);
console.log(keyRusLower.length);
console.log(keyRusCapsL.length);
console.log(keyRusShift.length);
console.log(keyCodeArr.length);

document.addEventListener('keydown', (e) => {
  document.querySelectorAll('.keyboard__key').forEach((key) => { key.classList.remove('active'); });
  document.querySelector(`.${e.code}`).classList.add('active');
});

document.addEventListener('keyup', (e) => {
  document.querySelectorAll('.keyboard__key').forEach((key) => { key.classList.remove('active'); });
});

// document.addEventListener('keydown', (e) => {
//   if (e.target.closest('.ControlLeft') && e.target.closest('.AltLeft')) {
//      let keys = document.querySelectorAll('.ru');
//      keys.forEach((key) => {
//         if (key.classList.contains('hidden')) {
//            key.classList.remove('hidden');
//            document.querySelectorAll('.eng').classList.add('hidden');
//         } else {
//            key.classList.add('hidden');
//            document.querySelectorAll('.eng').classList.remove('hidden');
//         }
//      });
//   }
// });

/*
const array = [];
console.log(document.querySelectorAll('.keyboard__key'));
document.querySelectorAll('.keyboard__key').forEach((item) => {
   item.addEventListener('click', (ev) => {
      console.log(ev.target);
      ev.target.classList.add('active');
      array.push(ev.target);
      console.log(array)
   })
});
*/

/*
document.querySelectorAll('.keyboard__key').forEach(function(element) {
  element.onclick = function(event) {element.classList.remove('active');
  let code = element.getAttribute('data');
  console.log(code);
  }
  });
*/

// document.querySelectorAll('.keyboard__key').forEach(function (element) {
//   element.addEventListener('click', () => {
//     console.log(element);
//     element.classList.remove('active');
//   });
//   console.log(element.getAttribute('data'));
//   const code = this.getAttribute('data');
//   this.classList.add('active');
//   console.log(code);
// });

// alert('Доброго времени суток. Очень прошу проверить работу в последний день проерки, после 20 часов). Надеюсь на понимание... Нажмтие ОК - отобразиться то, что удалось сделать.');