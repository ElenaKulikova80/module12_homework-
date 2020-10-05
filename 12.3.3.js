﻿function emptyObj(){
  var obj=Object.create(null)
  console.log(obj)
}
emptyObj()

// Задание выполнено не верно, т.к. при создании объекта с помощью new Object() он автоматически получает в качестве прототипа специальный встроенный объект. Чтобы объект не имел протоипа, нужно использовать Object.create() и в скобках вместо протоипа указать null. Выше исправила на правильный вариант.