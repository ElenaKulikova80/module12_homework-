function ElectricDevice(name){
  this.gruppa = 'Электроприбор';
  this.name = name;
  this.status = "off";
}

ElectricDevice.prototype.getStatus = function(){
    console.log(`Прибор ${this.name} ${this.status === "on"? "включен" : "выключен"}`);
}

ElectricDevice.prototype.turnOn = function() {
  this.status = "on";
}

ElectricDevice.prototype.turnOff = function() {
  this.status = "off";
}

function Computer(name, ram, cpu){
  this.name = name;
  this.ram = ram;
  this.cpu = cpu;
}

function Lamp(name, power){
  this.name = name;
  this.power = power;
}

Lamp.prototype = new ElectricDevice();
Lamp.prototype.getPower = function(){
    console.log(`${this.name} имеет мощность, равную ${this.power} Вт.`)
};

Computer.prototype = new ElectricDevice();
Computer.prototype.getRamCpu = function(){
    console.log(`${this.name} имеет оперативную память ${this.ram} ГБ, процессор ${this.cpu}.`)
};

const incandescentLamp = new Lamp('Лампа накаливания', 1000);
const notebook = new Computer('Ноутбук', 4, 'Core');

incandescentLamp.turnOn();
incandescentLamp.getStatus();
incandescentLamp.turnOff();
incandescentLamp.getStatus();
incandescentLamp.getPower();
notebook.getStatus();
notebook.getRamCpu()

// Задание выполнено не верно, есть несколько ошибок:
// 1. Функция getStatus в таком виде, как сейчас, не имеет смысла, т.к. мы хотим получить сведения об объекте, но при этом выводим данные, которые сами же и передали в функцию (аргументы name и status). Чтобы метод работал корректно, надо использовать this - ссылку на текущий объект.
// 2. Чтобы метод getStatus работал верно, в конструкторе ElectricDevice должно быть определено свойство, отвечающее за состояние прибора (вкл\выкл), например, свойство status
// 3. В конструкторе Computer объекту не присваиваются свойства ram и cpu
// 4. С методом getPower у Lamp такая же проблема, как и в пункте 1. Эта информация (имя и мощность) должна храниться в объекте, а с помощью метода мы только получаем эти свойства
// 5. То же самое касается и метода getRamCpu у Computer
// 6. По заданию нужно было определить метод, который отвечает за включение/выключение приборов из розетки. У вас такого метода нет.\
// 7. И небольшое замечание по стилю кода: с большой буквы пишутся только названия классов и функций конструкторов. Остальные переменные должны быть названы в стиле camelCase. Это не приводит к ошиьке на уровне кода, но это общепринятый стандарт, и лучше ему следовать, чтобы в коде не было путаницы.

// Постаралась выше исправить все перечисленные ошибки