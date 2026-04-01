import { Paciente } from "./Paciente"
import { Medico } from "./Medico"

export class Prontuario{
    paciente: Paciente
    medico: Medico

    constructor(paciente: Paciente, medico: Medico){
       this.paciente = paciente
       this.medico = medico
    }

    exibirProntuario(): void{
        console.log(`Paciente: ${this.paciente.pessoa.nome} \nMédico: ${this.medico.pessoa.nome} \nLista de remédios: `,
            this.paciente.remedios.forEach(r => {
                console.log (`${r.nome}`);
            }
        )
    }
}