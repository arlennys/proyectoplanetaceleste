import { CuerpoCeleste } from "./cuerpo_celeste";

export class Estrella extends CuerpoCeleste 
{
    constructor(nombre: string, masa: number, posicion: { x: number; y: number }, velocidad: number)
    {
        super(nombre, masa, posicion, velocidad);
    }
}
