var resultdiv = document.createElement('div');
resultdiv.id = 'res';
resultdiv.addEventListener('click', actionClick);
document.body.appendChild(resultdiv);

var buttondiv = document.createElement('div');
buttondiv.id = 'btns';
document.body.appendChild(buttondiv);
 
var id= ['btn0','btn1','btnClr','btnEql','btnSum','btnSub','btnMul','btnDiv'];
var innerhtml= ['0','1','C','=','+','-','*','/'];
var styleclass = ['buttonClass','buttonClass','buttonClass','buttonClass','buttonClass','buttonClass',
                 'buttonClass','buttonClass'];
 

for(var i=0;i<id.length;i++){
    var button = document.createElement('button');
    button.id=id[i];
    button.innerHTML=innerhtml[i];
    button.className =  styleclass[i];
    button.addEventListener('click', actionClick);
    buttondiv.appendChild(button);

} 

var operator = '';
function actionClick(e) {

    var btn = e.target;
    
  if(btn.id == 'btnClr'){
                  operator = '';
                  resultdiv.innerHTML= '';
                  
   } else if (btn.id != 'btnEql'){
          if(btn.id != 'btn0' && btn.id != 'btn1'){
            if (operator != ''){
                evaluate();
             }
              operator = btn.innerHTML;
            } 

            resultdiv.innerHTML += btn.innerHTML; 
    }else{
      evaluate();
    }
           
}

// We can use the Math.floor function to ensure that our calculator discards any remainders in Integer Division. 

// Binary Numbers to Integer Strings
//To convert a non-base-10 number,num , of radix (r) to a base-10 integer string, we use the syntax num.toString(r). 

// The eval Function
// We can use this function to evaluate a string representing an expression. If the string consists of base-10
// integers and mathematical operators, this function calculates the result of the mathematical expression.

function evaluate() {
    var operand = resultdiv.innerHTML.split(operator);
    resultdiv.innerHTML = Math.floor(eval(parseInt(operand[0],2)
                                         + operator + parseInt(operand[1],2)
                                         )).toString(2);
    operator = '';
}
