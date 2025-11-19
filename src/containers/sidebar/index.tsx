import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/parágrafo"
import Titulo from "../../components/título"
import { Descricao, BotaoTema, SidebarContainer } from "./styles";

const Sidebar = () => {
  return (
  <aside>
  <SidebarContainer>
    <Avatar />
    <Titulo fontSize={20}>Natália de Castro</Titulo>
    <Paragrafo tipo="secundário" fontSize={16}>
      natcsouzaIT
    </Paragrafo>
    <Descricao tipo="principal" fontSize={12}>Desenvolvedora Front-End</Descricao>
    <BotaoTema>Trocar tema</BotaoTema>
  </SidebarContainer>
    </aside>
  )
}

export default Sidebar
