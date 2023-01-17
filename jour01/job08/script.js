function sommenombrespremiers(){
    var a1=parseInt(document.getElementById("v1").value);
    var a2=parseInt(document.getElementById("v2").value);
    
    if ((a1 == 0 || a1 == 1) || (a2 == 0 || a2 == 1)) { 
        alert("False")
    }else if ((a1 == 2 || a1 == 3) && (a2 == 2 || a2 == 3)) {
        alert(a1+a2)
    }else {
        var a1_nbpr = 1
        var a2_nbpr = 1
        if (a1>3){
            for(var i = a1+1; i < a1; i++){
                if (a1 % i == 0 ){
                    a1_nbpr = 0 
                    
                    break
                }
            }
        }
        if (a2>3){
            for(var j = a2+1; j < a2; j++){
                if (a2 % j == 0){
                    a2_nbpr = 0
                    break
                }
            }
        }
        if (a1_nbpr == 1 && a2_nbpr == 1){
            alert (a1+a2)
        }else{
            alert("False")
        } 
    }
}
