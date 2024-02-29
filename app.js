let input_num = document.querySelectorAll(".input_num");
let input_opr = document.querySelectorAll(".input_opr")
let input_box = document.querySelector(".input_box");

let first = "";
let second = "";
let opratore = "";
let result = 0;

for(let item of input_num)
{
    item.addEventListener("click" , (evt)=>{
        add_num(evt.target);
    })
}


for(let item of input_opr)
{
    item.addEventListener("click" , (evt)=>{
        decide_opration(evt.target);
    });
}


function add_num(element)
{
   if(opratore == "")
   {
       first += element.innerText;
       input_box.innerText = first;
   }
   else
   {
       second += element.innerText;
       input_box.innerText = second;
   }

}


function decide_opration(element)
{
    if(element.innerText === "CE")
    {
        first = "";
        second = "";
        result = "";
        opratore = "";
        input_box.innerText = "";
    }
    else if(element.innerText === "=")
    {
        calc_result();
    }
    else
    {
        opratore = element.innerText;
    }
}


function calc_result()
{

    if(opratore === "+")
    {
        result = parseInt(first) + parseInt(second);
    }
    else if(opratore === "-")
    {
        result = parseInt(first)-parseInt(second);
    }
    else if(opratore === "*")
    {
        result = parseInt(first)*parseInt(second);
    }
    else
    {
        result=parseInt(first)/parseInt(second);
    }

    
    input_box.innerText = result;
    first = "";
    second = "";
    opratore = "";
    result = "";
}