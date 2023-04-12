let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let val = e.target.innerHTML
        if(val=='C'){
            string = "";
        }else if(val == 'DE'){
            string = string.slice(0,-1);
        }else if(val=='+'||val=='-'||val=='x'||val=='%'||val=='/'||val=='='){
            if((string.length==0) && (val=='+' || val=='-')){
                string += val;
            }else if(string[string.length-1]>='0' && string[string.length-1]<='9'){
                console.log("Hello");
                if(val == 'x'){
                    string += '*';
                }else if(val == '='){
                    string = eval(string);
                }else{
                    string += val;
                }
            }else{
                alert("Invalid Input");
            }
        }else{
            string += e.target.innerHTML;
        }
        document.querySelector('input').value = string;
    });
});


