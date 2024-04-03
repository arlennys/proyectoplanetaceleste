 /*//celestial-body.ts
export class CelestialBody 
{
    constructor(
        public name: string,
        public mass: number,
        public position: { x: number; y: number },
        public orbitSpeed: number
    ) {}
}

// planet.ts
import { CelestialBody } from "./sistema_solar";

export class Planet extends CelestialBody 
{
    constructor(
        name: string,
        mass: number,
        position: { x: number; y: number },
        orbitSpeed: number,
        public star: Star
    ) {
        super(name, mass, position, orbitSpeed);
    }
}

// star.ts
import { CelestialBody } from "./sistema_solar";

export class Star extends CelestialBody {
    // Any additional properties or methods specific to stars
}

// satellite.ts
import { CelestialBody } from "./sistema_solar";
import { Planet } from "./planet";

export class Satellite extends CelestialBody {
    constructor(
        name: string,
        mass: number,
        position: { x: number; y: number },
        orbitSpeed: number,
        public parentPlanet: Planet
    ) {
        super(name, mass, position, orbitSpeed);
    }
}

// simulation.ts
import { CelestialBody } from "./sistema_solar";

export function calculateFuturePosition(cuerpoCele: CelestialBody, time: number): { x: number; y: number } {
    const angularVelocity = (2 * Math.PI) / body.orbitSpeed;
    const futureX = body.position.x * Math.cos(angularVelocity * time) - body.position.y * Math.sin(angularVelocity * time);
    const futureY = body.position.x * Math.sin(angularVelocity * time) + body.position.y * Math.cos(angularVelocity * time);
    return { x: futureX, y: futureY };
}

// main.ts


// Crear instancias de cuerpos celestes
const sun = new Star("Sun", 1.989e30, { x: 0, y: 0 }, 0);

const earth = new Planet("Earth", 5.972e24, { x: 1.496e11, y: 0 }, 29783, sun);

const moon = new Satellite("Moon", 7.34767309e22, { x: 3.844e8, y: 0 }, 1022, earth);

// Calcular la posición futura de la Tierra después de 1 año (en segundos)
const futurePositionEarth = calculateFuturePosition(earth, 365 * 24 * 60 * 60);

console.log("Future position of Earth:", futurePositionEarth);

// Buscar cuerpos celestes por nombre y mostrar su información
function findCelestialBodyByName(name: string) {
    const celestialBodies: CelestialBody[] = [sun, earth, moon]; // Aquí deberías tener un arreglo con todos los cuerpos celestes
    const foundBody = celestialBodies.find(body => body.name === name);
    if (foundBody) {
        console.log("Found celestial body:", foundBody);
    } else {
        console.log("Celestial body not found.");
    }
}

findCelestialBodyByName("Earth")

/*
export class SistemaSolar 
{
    constructor
    (
        public cuerposCelestes: CuerpoCeleste[]
    ) {}
}

export abstract class CuerpoCeleste {
    constructor
    (
        public nombre: string,
        public masa: number,
        public posicionActual: { x: number, y: number },
        public velocidad: number
    ) {}

    abstract mostrarDatos(): void;
}

export class Planeta extends CuerpoCeleste {
    constructor(nombre: string, masa: number, posicionActual: { x: number, y: number }, velocidad: number) {
        super(nombre, masa, posicionActual, velocidad);
    }

    mostrarDatos() 
    {
        console.log(`Nombre del planeta: ${this.nombre}`);
        console.log(`Su masa es: ${this.masa}`);
        console.log(`Su posición actual es: (${this.posicionActual.x}, ${this.posicionActual.y})`);
        console.log(`Su velocidad es: ${this.velocidad}`);
    }
}

export class Estrella extends CuerpoCeleste {
    constructor(nombre: string, masa: number, posicionActual: { x: number, y: number }, velocidad: number) {
        super(nombre, masa, posicionActual, velocidad);
    }

    mostrarDatos() 
    {
        console.log(`Nombre de la estrella: ${this.nombre}`);
        console.log(`Su masa es: ${this.masa}`);
        console.log(`Su posición actual es: (${this.posicionActual.x}, ${this.posicionActual.y})`);
        console.log(`Su velocidad es: ${this.velocidad}`);
    }
}

export class SateliteNatural extends CuerpoCeleste {
    constructor(nombre: string, masa: number, posicionActual: { x: number, y: number }, velocidad: number) {
        super(nombre, masa, posicionActual, velocidad);
    }

    mostrarDatos() 
    {
        console.log(`Nombre del satélite: ${this.nombre}`);
        console.log(`Su masa es: ${this.masa}`);
        console.log(`Su posición actual es: (${this.posicionActual.x}, ${this.posicionActual.y})`);
        console.log(`Su velocidad es: ${this.velocidad}`);
    }
}

// Ejemplo de uso
const planeta1 = new Planeta('Saturno', 23.5, { x: 8.28, y: 0.96 }, 200);
const estrella1 = new Estrella('Lucia', 1.25, { x: 8, y: 0 }, 4000);
const sateliteNatural1 = new SateliteNatural('Latios', 32.7, { x: 2.28, y: 0.16 }, 500);

planeta1.mostrarDatos();
estrella1.mostrarDatos();
sateliteNatural1.mostrarDatos();






*/
