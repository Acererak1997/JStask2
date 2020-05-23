'use strict'

document.querySelector('button').addEventListener('click', () => {
          let addElement = document.querySelector('ul');
          let childNode = addElement.firstChild;

          if(childNode){
              addElement.removeChild(childNode);
          } 

              let msg= '';
              let fizz = document.getElementById( "fizz-target" ).value;
              let buzz = document.getElementById( "buzz-target" ).value;
              let num1 = isNaN(fizz);
              let num2 = isNaN(buzz);
              
              let item = document.createElement('li')
              
              
              if(num1 === false && num2 === false){
                      for(let i =1; i <= 99; i++) {
                          if(i % fizz === 0 && i % buzz ===0 ) {
                              msg = `FizzBuzz ${i}`;
                              let item = document.createElement('li')
                              item.textContent = msg;
                              addElement.appendChild(item);
                          }else if(i % fizz === 0) {
                              msg =  `Fizz ${i}`;
                              let item = document.createElement('li')
                              item.textContent = msg;
                              addElement.appendChild(item);
                          }else if(i % buzz === 0) {
                              msg = `Buzz ${i}`;
                              let item = document.createElement('li')
                              item.textContent = msg;
                              addElement.appendChild(item);
                            }            
                        }
                } else {
               msg += `整数を入力してください`
               let item = document.createElement('li')
               item.textContent = msg;
               addElement.appendChild(item);
                }
               
 
});