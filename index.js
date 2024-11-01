const body = document.querySelector('.js-input');

function reverseString(str){
return str.split("").reverse().join("")
}

function check(){
    const value = body.value
    const reverse = reverseString(value)
    const result= document.querySelector('.js-enter')

    

          if( value === reverse)
            {result.innerHTML= 'Palindrome'
                
             }
          
          else { result.innerHTML= 'Not a Palidrome!'
           
          }
        
    }
          


function enter(event){
    if(event.key==='Enter'){
        check();
    }
}

  