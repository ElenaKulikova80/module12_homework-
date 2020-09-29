function ElectricDevice(name){
  this.gruppa = 'Электроприбор',
  this.name=name
}
ElectricDevice.prototype.getStatus = function(name,status){
    console.log(`${name} ${status}`);
}
function Computer(name,ram,cpu){
  this.name=name,
  this.ram,
  this.cpu
}
function Lamp(name,manufactura){
  this.name=name,
  this.manufactura=manufactura
}

Lamp.prototype=new ElectricDevice();
Lamp.prototype.getPower = function(name,P){
    console.log(`${name} имеет мощность, равную ${P} Вт.`)
};
Computer.prototype=new ElectricDevice();
Computer.prototype.getRamCpu = function(name,ram,cpu){
    console.log(`${name} имеет оперативную память ${ram} ГБ, процессор ${cpu}.`)
};
const IncandescentLamp=new Lamp();
const Notebook=new Computer();

IncandescentLamp.getStatus('Лампа накаливания','On');
IncandescentLamp.getPower('Лампа накаливания',1000);
Notebook.getStatus('Ноутбук','Off');
Notebook.getRamCpu('Ноутбук',4,'Core')