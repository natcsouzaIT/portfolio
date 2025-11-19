import styled from "styled-components";
import { P } from "../../components/parágrafo/styles";

export const Descricao = styled(P) `
  margin-top: 24px;
  margin-bottom: 40px;
`
export const SidebarContainer = styled.div `
  position: sticky;
  top:80px;
  left:0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
