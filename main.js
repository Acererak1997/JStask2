{
'use strict'

document.getElementById('btn').addEventListener('click', () => {

    const addElement = document.getElementById('parent');
    const hasChild = addElement.hasChildNodes();
    
    if(hasChild){
        while(addElement.firstChild){
            addElement.removeChild(addElement.firstChild);
        }
    } 

    let msg= '';
    const fizz = document.getElementById( "fizz-target" ).value;
    const buzz = document.getElementById( "buzz-target" ).value;
    const int1 =  parseInt(fizz, 10);
    const int2 =  parseInt(buzz, 10);
    const hea =  /^([1-9]\d*|0)$/;
    const fizzNaN =  hea.test(int1);
    const  buzzNaN =  hea.test(int2);
    const item = document.createElement('li')


    if(fizzNaN && buzzNaN){
        for(let i =1; i <= 99; i++) {
            if(i % fizz === 0 && i % buzz ===0 ) {
                msg = `FizzBuzz ${i}`;
                const item = document.createElement('li')
                item.textContent = msg;
                addElement.appendChild(item);
            }else if(i % fizz === 0) {
                msg =  `Fizz ${i}`;
                const item = document.createElement('li')
                item.textContent = msg;
                addElement.appendChild(item);
            }else if(i % buzz === 0) {
                msg = `Buzz ${i}`;
                const item = document.createElement('li')
                item.textContent = msg;
                addElement.appendChild(item);
            }  
        }
    } else {
        msg = `整数を入力してください`
        const item = document.createElement('li')
        item.textContent = msg;
        addElement.appendChild(item);
    }
});
}