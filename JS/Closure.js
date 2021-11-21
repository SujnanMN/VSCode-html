function x(){
    for(var i=1;i<=5;i++){
        function close(x){
        setTimeout(function(){
            console.log(x);
            document.write(5);
        },i+1000);
    }
     close(i);
    
}
}
x();