// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });

describe("este es mi primer grupo de tests", () =>{
    it("El numero dos debe ser igual al numero 2", () =>{
      expect(2).toEqual(2)
    });
  });
  
  const sumar = (a, b) => a + b;
  
  it("La funcion sumar", ()=> {
      it("debe estar definida", ()=>{
        expect(sumar).toBeDefined();
      });
  });
  
  it("debe sumar dos numeros enviados por argumento", () =>{
    expect(sumar(2, 2)).tobe(4);
    expect(sumar(4, 4)).tobe(8);
    expect(sumar(5, 0)).tobe(5);
  
  })