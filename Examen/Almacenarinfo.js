document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('guardarDatos').addEventListener('click', capturarYAlmacenar);
  });
  
  function capturarYAlmacenar() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = parseInt(document.getElementById('edad').value);
  
    let esMayorEdad = edad >= 18;
  
    // Creación del objeto persona con método nombreCompleto
    let persona = {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
      }
    };
  
    alert("El nombre completo es: " + persona.nombreCompleto());
  
    if (esMayorEdad) {
      alert("Es mayor de edad.");
    } else {
      alert("Es menor de edad.");
    }
  }
  