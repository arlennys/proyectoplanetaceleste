export class CuerpoCeleste 
{
    constructor
    (
        public nombre: string,
        public masa: number,
        public posicion: { x: number; y: number },
        public velocidad: number
    ) {}
}
