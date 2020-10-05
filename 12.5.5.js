class ElectricDevice{
  constructor (name){
  this.gruppa = 'Электроприбор',
  this.name=name
  };
  getStatus(name,status){
    console.log(`${name} ${status}`);
}
}
class Computer extends ElectricDevice{
  constructor (name,ram,cpu){
  super(name,status);
  this.name=name,
  this.ram,
  this.cpu
  };
  getRamCpu(name,ram,cpu){
    console.log(`${name} имеет оперативную память ${ram} ГБ, процессор ${cpu}.`);
}
}
class Lamp extends ElectricDevice{
  constructor(name,manufactura,status){
  super(name,status);
  this.name=name,
  this.manufactura=manufactura
  };
  getPower(name,P){
    console.log(`${name} имеет мощность, равную ${P} Вт.`)
}
}

const IncandescentLamp=new Lamp();
const Notebook=new Computer();

IncandescentLamp.getStatus('Лампа накаливания','On');
IncandescentLamp.getPower('Лампа накаливания',1000);
Notebook.getStatus('Ноутбук','Off');
Notebook.getRamCpu('Ноутбук',4,'Core')

// Здесь повторяются все те же ошибки, что и в прошлом задании. Попробуйте на основе исправлений, которые я сделала там, исправить код и в этом задании