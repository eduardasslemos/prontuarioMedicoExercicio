import { Endereco } from "./Endereco"
import { Contato } from "./Contato"
import { Pessoa } from "./Pessoa"
import { Remedio } from "./Remedio"
import { Paciente } from "./Paciente"
import { Medico } from "./Medico"
import { Prontuario } from "./Prontuario"

const endereco1 = new Endereco ("Rua A", 123, "Boituva", "24829");
const contato1 = new Contato ("2984-294", "aninha@gmail.com");
const pessoa1 = new Pessoa ("Ana", 25, endereco1, contato1);
const remedio1 = new Remedio ("Dipirona", "1mg");
const remedio2 = new Remedio ("Ibuprofeno", "1mg");
const remedios: Remedio[] = [remedio1, remedio2];
const paciente = new Paciente (pessoa1, remedios);
const endereco2 = new Endereco ("Rua B", 321, "Boituva", "24929");
const contato2 = new Contato ("2924-294", "zezinho@gmail.com");
const pessoa2 = new Pessoa ("José", 31, endereco2, contato2);
const medico = new Medico (pessoa2, "Dermatologia");
const prontuario = new Prontuario (paciente, medico);

prontuario.exibirProntuario()