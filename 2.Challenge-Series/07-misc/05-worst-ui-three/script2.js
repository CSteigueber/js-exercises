var b=[true,true,true,true];
var min=[];
var max=[];
var v=[];
 v[0]=document.getElementById("part-one");
 v[1]=document.getElementById("part-two");
 v[2]=document.getElementById("part-three");
 v[3]=document.getElementById("part-four");
const randomize =()=>{
    for (i=0; i<4; i++){

        switch (true){
            case b[0]&&(i==0): 
                v[0].setAttribute("value",Math.ceil((Math.random()*(max[0]-min[0]))+min[0]));
            break;
            case b[1]&&(i==1): 
                v[1].setAttribute("value",Math.ceil((Math.random()*(max[1]-min[1]))+min[1]));
                if (v[1].getAttribute("value")<10) {v[1].setAttribute("value","0"+v[1].getAttribute("value"));}
            break;
            case b[2]&&(i==2): 
                v[2].setAttribute("value",Math.ceil((Math.random()*(max[2]-min[2]))+min[2]));
                if (v[2].getAttribute("value")<10) {v[2].setAttribute("value","0"+v[2].getAttribute("value"));}
            break;
            case b[3]&&(i==3): 
                v[3].setAttribute("value",Math.ceil((Math.random()*(max[3]-min[3]))+min[3]));
                if (v[3].getAttribute("value")<10) {v[3].setAttribute("value","0"+v[3].getAttribute("value"));}
            break;
        }
    }
}
const get_limits =()=>{
    for (i=0;i<4;i++){
        let str="";
        switch (i){
            case 0: str="one";   break;
            case 1: str="two";   break;
            case 2: str="three"; break;
            case 3: str="four";  break;
        }
        min[i]=parseInt(document.getElementById("part-"+str).getAttribute("data-min"));
        max[i]=parseInt(document.getElementById("part-"+str).getAttribute("data-max"));
    }
}

const set_buttons =()=>{
    for (i=0;i<4;i++){
       
        document.getElementById("fix-part-one").addEventListener("click", function (){b[0]=false;printTarget();})
        document.getElementById("fix-part-two").addEventListener("click", function (){b[1]=false;printTarget();})
        document.getElementById("fix-part-three").addEventListener("click", function (){b[2]=false;printTarget();})
        document.getElementById("fix-part-four").addEventListener("click", function (){b[3]=false;printTarget();})
    }
}

const printTarget =()=>{
    if (!(b[0]||b[1]||b[2]||b[3])){
        let res="";
        for (i=0;i<v.length;i++){
            res+=v[i].getAttribute("value");
        }
        document.getElementById("target").innerHTML="+"+res;
    }
}



(function (){
    get_limits();
    set_buttons();
    setInterval(function () {randomize();},100);

    
    
})();
