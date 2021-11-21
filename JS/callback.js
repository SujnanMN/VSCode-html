setTimeout(function(){
    console.log("Timer is running");
},5000);
function x(y)
{
console.log("x is running");
y();
}
x(function y(){
    console.log("y is running");
})