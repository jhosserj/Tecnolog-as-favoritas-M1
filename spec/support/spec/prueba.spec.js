describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});
const filtrar = (arr) =>arr.filter((num)=> num % 2 === 0);

describe("la funcion filtrar", () =>{
  it("debe estar definida", ()=>{
    expect(filtrar).toBeDefined();
  })

it("Debe retornar un array", ()=>{

  expect(Array,isArray(filtrar([1, 2, 3, 4, 5, 6]))).tobe(true);
});
it("Debe retornar un array con los numeros pares", ()=>{
  expect(filtrar([1, 2, 3, 4])).toEqual([2, 4]);
    });
  });



// describe("este es mi primer grupo de tests", () =>{
//   it("El numero dos debe ser igual al numero 2", () =>{
//     expect(2).toEqual(2)
//   });
// });

// const sumar = (a, b) => a + b;

// it("La funcion sumar", ()=> {
//     it("debe estar definida", ()=>{
//       expect(sumar).toBeDefined();
//     });
// });

// it("debe sumar dos numeros enviados por argumento", () =>{
//   expect(sumar(2, 2)).tobe(4);
//   expect(sumar(4, 4)).tobe(8);
//   expect(sumar(5, 0)).tobe(5);

// })
//  const letras = "hola";
// describe("hola", ()=>{
//   it("debe recibir hola", () =>{
//     expect(letras("hola")).toEqual("hola");
//   });


// });

// describe("una prueba con objetos", ()=>{
//   it("Yo espero que sean iguales", () =>{
//     expect(5).tobe(5);
//     expect(10).tobe(10);
//   });
// });

// it("Yo espero que dos palabras sean iguales", () =>{

//   expect("jorge").tobe("jorge");
//   expect("alejo").tobe("alejo");
  
// });
// la expresion "tobe", no sirve para comparar objetos ni arrays
// solo strings, y numeros.
// la expresion "toEqual", si puede ya que analiza otros datos
// como el espacio en memoria etc...
// it("Yo espero que dos objetos sean iguales", () =>{
//   expect({nombre: "jhosser"}).toEqual({nombre:"jhosser"});

// });
// it("Yo espero que dos arrays sean iguales", () =>{
//   expect([1, 2, 3]).toEqual([1, 2, 3]);

// });



