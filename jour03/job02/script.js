let melangerBtn = document.querySelector("#melangerBtn");
let recommencerBtn = document.querySelector("#recommencerBtn");
let x=0;
melangerBtn.addEventListener("click", function() {
    x ++;
    if (x==1){  
        let arr = [1, 2, 3, 4, 5, 6];
        let result = [];
        while (arr.length > 0) {
            let index = Math.floor(Math.random() * arr.length);
            result.push(arr[index]);
            arr.splice(index, 1);
        }    
        for (let i = 0; i < result.length; i++){
            $('.abc').prepend("<img src='arc"+result[i]+".png' alt='image'>")  
        }   
    }  
});

recommencerBtn.addEventListener("click", function() {
    x=0;
    $('abc').append("<img src='arc1.png' alt='image'>");
    $(".arc1.png").remove();
});
          