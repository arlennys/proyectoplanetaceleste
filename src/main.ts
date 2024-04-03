import './style.css'
import { CuerpoCeleste } from './modulos/cuerpo_celeste.ts'
import  {Estrella} from './modulos/estrella.ts'
import {Planeta} from './modulos/planeta.ts'
import {SateliteNatural} from './modulos/sateliteNatural.ts'
import { calcularPocicionfu } from './modulos/simulador_movimiento.ts';
import { setupCounter } from './counter.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML =
`
<h1> SISTEMA SOLAR</h1>
<hr>
<h2> miren el console log</h2>
<p></p> 
`
const estrella1 = new Estrella('vega', 4.246, { x: 8, y: 0 }, 4000);
const planeta1 = new Planeta('jupiter', 1.898, { x:750.000, y: 0 }, 200, estrella1);
const sateliteNatural1 = new SateliteNatural('calisto', 32.7, { x: 2.28, y: 0.16 }, 500, planeta1);

const Pocicionfutura =  calcularPocicionfu(planeta1,365*24*60*60)


const cuerposCelestes: CuerpoCeleste[] = [estrella1, planeta1, sateliteNatural1];
console.log("cuerpos celestes y sus datos:",cuerposCelestes);
console.log("posicion futura de cuerpo celeste:",Pocicionfutura)


function buscarCuerpo(nombre: string) {
    const cuerposCelestes: CuerpoCeleste[] = [planeta1, estrella1, sateliteNatural1]; // Aquí deberías tener un arreglo con todos los cuerpos celestes
    const cuerpoEncontrado = cuerposCelestes.find(cuerpo => cuerpo.nombre === nombre);
    if (cuerpoEncontrado) {
        console.log("Cuerpo celeste encontrado:", cuerpoEncontrado);
    } else {
        console.log("Cuerpo celeste no encontrado.");
    }
}

buscarCuerpo("jupiter");

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
