function Sumar(a,b) {
	return a + b;
}

function Producto(a,b) {
	var c = 20;
	return a*b*c;
}

var Resultado_suma = Sumar(7,7);
console.log(Resultado_suma);

var Resultado_Producto = Producto(20,30);
console.log(Resultado_Producto);


Persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    telefono: 900199703,
    email: 'juan.perez@gmail.com'
}

for (var key in Persona) {
    console.log(key + ':' + Persona[key]);
}

