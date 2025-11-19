import Sobre from './containers/sobre'
import Sidebar from './containers/sidebar'
import EstiloGlobal, { Container } from './styles'
import Projetos from './containers/projetos'


function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
