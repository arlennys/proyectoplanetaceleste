import { CuerpoCeleste } from "./cuerpo_celeste";
import { Estrella } from "./estrella";

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

}