export class Simulador
 {
    constructor(public cuerposCelestes: CuerpoCeleste[]) {}

    simularMovimiento(tiempoTotal: number, intervaloTiempo: number)
     {
        for (let t = 0; t <= tiempoTotal; t += intervaloTiempo) 
        {
            for (const cuerpo of this.cuerposCelestes) 
            {
                cuerpo.calcularPosicion(t);
            }
        }
    }
}

export abstract class CuerpoCeleste 
{
    constructor
    (
        public nombre: string,
        public masa: number,
        public posicion: { x: number; y: number },
        public velocidad: number
    ) {}

    abstract mostrarDatos(): void;
    abstract calcularPosicion(tiempo: number): void;
}

export class Planeta extends CuerpoCeleste 
{
    constructor
    (
        nombre: string, 
        masa: number, 
        posicion: { x: number; y: number }, 
        velocidad: number,  
        public estrella: Estrella
    ) 
    {
        super(nombre, masa, posicion, velocidad);
    }

    mostrarDatos()
     {
        console.log(`Nombre de la planeta: ${this.nombre}`);
        console.log(`Masa: ${this.masa}`);
        console.log(`Posición: (${this.posicion.x}, ${this.posicion.y})`);
        console.log(`Velocidad: ${this.velocidad}`);
     }
    

    calcularPosicion(tiempo: number) 
    {
        this.posicion.x= this.posicion.y +(this.velocidad*tiempo)
    }
}

export class Estrella extends CuerpoCeleste 
{
    constructor(nombre: string, masa: number, posicion: { x: number; y: number }, velocidad: number)
    {
        super(nombre, masa, posicion, velocidad);
    }

    mostrarDatos() {
        console.log(`Nombre de la estrella: ${this.nombre}`);
        console.log(`Masa: ${this.masa}`);
        console.log(`Posición: (${this.posicion.x}, ${this.posicion.y})`);
        console.log(`Velocidad: ${this.velocidad}`);
    }

    calcularPosicion(tiempo: number)
    {
        this.posicion.x= this.posicion.y +(this.velocidad*tiempo)// Implementa el cálculo de la posición aquí basado en la velocidad y la posición inicial.
    }
}

export class SateliteNatural extends CuerpoCeleste
{
    constructor
    (
        nombre: string,
         masa: number, 
         posicion: { x: number; y: number },
         velocidad: number,
         public planeta: Planeta
    ) 
    {
        super(nombre, masa, posicion, velocidad);
    }

    mostrarDatos() {
        console.log(`Nombre del satélite: ${this.nombre}`);
        console.log(`Masa: ${this.masa}`);
        console.log(`Posición: (${this.posicion.x}, ${this.posicion.y})`);
        console.log(`Velocidad: ${this.velocidad}`);
    }

    calcularPosicion(tiempo: number)
    {
        this.posicion.x= this.posicion.y +(this.velocidad*tiempo)
    }
   
}


const estrella1 = new Estrella('vega', 4.246, { x: 8, y: 0 }, 4000);
const planeta1 = new Planeta('jupiter', 1.898, { x:750.000, y: 0 }, 200, estrella1);
const sateliteNatural1 = new SateliteNatural('calisto', 32.7, { x: 2.28, y: 0.16 }, 500, planeta1);

const sistemaSolar: CuerpoCeleste[] = [estrella1, planeta1, sateliteNatural1];
const sistema = new Simulador(sistemaSolar);

sistema.simularMovimiento(365, 1);
planeta1.mostrarDatos();
estrella1.mostrarDatos();
sateliteNatural1.mostrarDatos();





