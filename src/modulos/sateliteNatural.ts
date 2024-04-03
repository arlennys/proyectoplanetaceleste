import { CuerpoCeleste } from "./cuerpo_celeste";
import { Planeta } from "../modulos/planeta";
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
   
}