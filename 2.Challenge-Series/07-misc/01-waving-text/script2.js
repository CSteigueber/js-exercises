var pos=-13;

const wrapTagNFont =(content, font, tag)=>{
    return `<${tag} style="font-size: ${font}px;">${content}</${tag}>`;
}

const waveMaker =(str, index)=>{
    let arr=[];
    for (let i=0; i<str.length; i++){
        let temp=str[i];
        let font=0;
        let a=12;
        switch (true){
            case Math.abs(index-i)<3: font=5*a;       break;
            case Math.abs(index-i)<6: font=4*a;     break;
            case Math.abs(index-i)<9: font=3*a;     break;
            case Math.abs(index-i)<12: font=2*a;    break;
            case Math.abs(index-i)<13: font=1.5*a;    break;
            default: font=a;
        }
       arr.push(wrapTagNFont(temp, font,"span"));
       
    }
    document.getElementById("target").innerHTML=arr.join("");
}




(function main (){
    var str=document.getElementById("target").innerHTML;
    setInterval(() => {
        waveMaker(str,pos);
        pos++;
        if (pos==str.length+13){
            pos=-13;
        }
        console.log(pos);
    }, 75);
    

})();