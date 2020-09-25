function checkProperty(str,obj){
 console.log(obj.hasOwnProperty(str));
}
var obj={
 city:"Moscow",
 name:"Ivan"
}
checkProperty("city",obj)