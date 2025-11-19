import Paragrafo from "../parágrafo";
import Titulo from "../título";
import { Card, LinkBotao } from "./styles";



const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundário">
        Lista de tarefas feita com VueJS
      </Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  );
}

export default Projeto
