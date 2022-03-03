class persona{
    
    constructor(nombre, edad, colorpiel){
        this.name = nombre;
        this.eda = edad;
        this.colorpiel = colorpiel;
    }
    get nombre(){
        return this.name;
    }
    get edad(){
        return this.eda;
    }

    set nombre(nombre){
        this.name = nombre
    }
    set edad(edad){
        this.eda=edad
    }
}
 
const persona1 = new persona("angel","20","moreno");

console.log(persona1.edad);
console.log(persona1.nombre);

persona1.nombre = "juan";
persona1.edad = "30";

console.log(persona1.nombre);
console.log(persona1.edad);