// Clase para representar un material
class Material {
    constructor(nombre, tipo, cantidad, precioPorUnidad) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.cantidad = cantidad;
      this.precioPorUnidad = precioPorUnidad;
    }
  
    // Método para calcular el costo total de este material
    calcularCosto() {
      return this.cantidad * this.precioPorUnidad;
    }
  
    // Método para mostrar la información del material
    mostrarInformacion() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Tipo: ${this.tipo}`);
      console.log(`Cantidad: ${this.cantidad}`);
      console.log(`Precio por Unidad: ${this.precioPorUnidad}`);
      console.log(`Costo Total: ${this.calcularCosto()}`);
    }
  }
  
  // Clase para gestionar el inventario de materiales
  class Inventario {
    constructor() {
      this.materiales = [];
    }
  
    // Método para agregar un material al inventario
    agregarMaterial(material) {
      this.materiales.push(material);
    }
  
    // Método para mostrar la información de los materiales de construcción en el inventario
    mostrarMaterialesConstruccion() {
      const materialesConstruccion = this.materiales.filter(material => material.tipo === 'Construcción');
      console.log('Materiales de Construcción en el Inventario:');
      materialesConstruccion.forEach(material => material.mostrarInformacion());
    }
  
    // Método para mostrar la información de los materiales de carpintería en el inventario
    mostrarMaterialesCarpinteria() {
      const materialesCarpinteria = this.materiales.filter(material => material.tipo === 'Carpintería');
      console.log('\nMateriales de Carpintería en el Inventario:');
      materialesCarpinteria.forEach(material => material.mostrarInformacion());
    }
  }
  
  // Ejemplo de uso
  let inventario = new Inventario();
  
  // Agregar materiales de construcción
  let material1 = new Material('Cemento', 'Construcción', 100, 5);
  let material2 = new Material('Arena', 'Construcción', 200, 3);
  let material3 = new Material('Grava', 'Construcción', 150, 4);
  
  // Agregar materiales de carpintería 
  let material4 = new Material('Madera', 'Carpintería', 50, 10);
  let material5 = new Material('Clavos', 'Carpintería', 1000, 0.1);
  
  inventario.agregarMaterial(material1);
  inventario.agregarMaterial(material2);
  inventario.agregarMaterial(material3);
  inventario.agregarMaterial(material4);
  inventario.agregarMaterial(material5);
  
  // Mostrar materiales de construcción y luego de carpintería
  inventario.mostrarMaterialesConstruccion();
  inventario.mostrarMaterialesCarpinteria();
  