function checkProperty(str,obj){
 console.log(obj.hasOwnProperty(str));
}
var obj={
 city:"Moscow",
 name:"Ivan"
}
checkProperty("city",obj)

// Код не совсем соответствует поставленной задаче. По заданию нужно нужно определить, есть ли в объекте свойство с таким ключом, при этом свойство не обязательно должно быть собственным, оно может быть взято и из прототипа. Поэтому использовать hasOwnProperty в данном случае - не совсем правильно. Вариант правильного решения:

function checkPropInObj (str, obj) {
  return (str in obj);
}