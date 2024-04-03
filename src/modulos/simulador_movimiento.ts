import { CuerpoCeleste } from "./cuerpo_celeste";

export function calcularPocicionfu(cuerpoCele:CuerpoCeleste,tiempo:number,):{x: number; y: number }
{
    const posicionx= cuerpoCele.posicion.x +(cuerpoCele.velocidad*tiempo)
    const posiciony= cuerpoCele.posicion.y +(cuerpoCele.velocidad*tiempo)
    return {x:posicionx, y:posiciony};
}

