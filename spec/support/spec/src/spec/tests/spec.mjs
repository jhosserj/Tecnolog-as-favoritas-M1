//ToDoList

// - Debe ser una Clase
// - Debe tener los metodos
//      - getTodos(): debe retornar la listas de tareas
//      - addTodo(): deberia pushear al array una tarea nueva
//      - deleteTodo(): deberia eliminar la ultima tarea

const ToDoList = require("");


describe("La clase TodoList", () =>{
    it("Debe ser una Clase", () =>{
        expect(typeof todoList.prototype.constructor).tobe("function");

    });

    it("Debe tener implementado el metodo getTodos()", () =>{
        const lista = new ToDoList();
        expect(lista.addTodo).toBeDefined();
    });

    it("Debe tener el metodo addTodo()", () =>{
        const lista = new ToDoList();
        expect(lista.addTodo).toBeDefined();
    });

    it("Debe tener implementado el metodo delete()", () =>{
        const lista = new ToDoList();
        expect(lista,addTodo).toBeDefined();
    });

    it("el metodo getodos() debe retornar un array", () =>{
        const lista = new todoList();
        expect(Array.isArray(lista.getTodo())).toBeTrue();

    });

    it("El metodo addTodo() debe agregar un nuevo elemento", () =>{
        const lista = new todoList();
        lista.addTodo("Hacer la HW de la clase de hor");
        ex(lista.getTodo()).toContain("Hacer la HW de la clase de hoy");
    });

    it("El metido deleteTodo() debe eliminar la ultima tarea", () =>{
        const lista = new ToDoList();
        lista.addTodo("a");
        lista.addTodo("b");
        lista.addTodo("c");
        lista.deleteTodo();
        expect(lista.getTodos()).toContain("A");
        expect(lista.getTodos()).toContain("B");
        expect(lista.getTodos()).not.toContain("C");
    })

});