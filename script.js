var input = document.querySelector("#date")
var output = document.querySelector("#output-div")
const btn = document.querySelector("#btn");


btn.addEventListener("click",main);

function main()
{
    var str1=input.value.replaceAll("-","")
    var str = str1[str1.length-2]+str1[str1.length-1]
    str+= str1[4]+str1[5];
    str+= str1[0]+str1[1]+str1[2]+str1[3];
    
    var strB = str;
    var rev="";

    
    for(let i=0;i<strB.length;i++)
    {
        rev = strB[i]+rev;
    }
    
    if(str == rev)
    {
        output.innerText = "Yay!Palindrome"
    }
    else{
        output.innerText = "Not a palindrome";
        
    }
}