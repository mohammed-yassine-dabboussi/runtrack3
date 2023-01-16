    function bisextile()
    {
        var annee=parseInt(document.getElementById("annee").value);
        var annee2=parseInt(annee);
        var res = false;
        if ((annee2 % 4)==0){
            res = true;
        }
        alert(res);
    }
    