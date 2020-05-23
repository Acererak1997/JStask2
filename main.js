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
    // 下記 isFiniteでも可能？
    // const fizzFinite = isFinite(fizz);
    // const buzzFinite = isFinite(buzz);

    // 試行1
    // let pattern = 	/^([1-9]\d*|0)$/;
    // let int1 = fizz.match(pattern);
    // let int2 = buzz.match(pattern);

    // 試行2
    // const int1 =  parseInt(fizz, 10);
    // const int2 =  parseInt(buzz, 10);

    const num1 = typeof int1;
    const num2 = typeof int2;
    
    console.log(`${num1}`);
    console.log(`${num2}`);
    const item = document.createElement('li')
    
    // isFiniteで行った場合のif文
    // if(fizzFinite && buzzFinite){
        if(num1 === 'number' && num2 === 'number'){
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