class Libro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = "disponible";
    }
    prestar() {
        //cambia el estado del libro a prestado
        this._prestado = "prestado";
        console.log(`El libro ${this.titulo} ha sido prestado`);
    }
    devolver() {
        this._prestado = "disponible";
        console.log(`El libro ${this.titulo} esta disponible`);
    } //cambia el estado del libro a disponible

    getEstado() {
        //retorna si el libro está prestado o disponible
        return this._prestado;
    }
}

class Biblioteca {
    constructor(nombres, libros = []) {
        this.nombres = nombres;
        this.libros = libros;
    }

    agregarLibro(libro) {
        //añade un libro a la colección
        this.libros.push(libro);
    }

    buscarPorISBN(isbn) {
        //busca un libro específico en la colección
        return this.libros.find((libro) => libro.isbn === isbn) || null;
    }

    prestarLibro(isbn) {
        //presta un libro según su ISBN
        const libro = this.buscarPorISBN(isbn);
        if (libro) {
            libro.prestar();
        } else {
            console.log(`no se encontro ${isbn}`);
        }
    }

    devolverLibro(isbn) {
        // devuelve un libro según su ISBN
        const libro = this.buscarPorISBN(isbn);
        if (libro) {
            libro.devolver();
        } else {
            console.log(`no se encontro ${isbn}`);
        }
    }

    mostrarLibros() {
        // muestra su estado
        if (this.libros.length === 0) {
            console.log("vacio");
            return;
        }
        this.libros.forEach((libro) => {
            console.log(
                ` ${libro.titulo} , (${libro.autor}), ${libro.isbn}, Estado libro : ${libro.getEstado()}`);
        });
    }
}

const biblioteca1 = new Biblioteca("Biblioteca Central");

const libro0 = new Libro(
    "Cien años de soledad",
    "Gabriel García Márquez",
    "11111",
);
const libro1 = new Libro("Odisea", "Homero", "46543548");
const libro2 = new Libro(
    "Don Quijote de la Mancha",
    "Miguel de Cervantes",
    "215465",
);
const libro3 = new Libro(
    "El señor de los anillos (Trilogía)",
    "Novela de J. R. R. Tolkien",
    "58797865",
);

biblioteca1.agregarLibro(libro0); // se agrega libros
biblioteca1.agregarLibro(libro1);
biblioteca1.agregarLibro(libro2);
biblioteca1.agregarLibro(libro3);

// console.log(biblioteca1.libros);
// console.log(biblioteca1.libros.length);

biblioteca1.mostrarLibros(); //llamando lo que existe

biblioteca1.prestarLibro("11111"); //prestar el libro de gabriel

biblioteca1.mostrarLibros(); // mostrar el cambio cuando se presto

biblioteca1.devolverLibro("11111");

const busqueda = biblioteca1.buscarPorISBN("11111");
console.log(busqueda);

biblioteca1.prestarLibro("215465");
