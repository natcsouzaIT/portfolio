import Titulo from "../../components/título";
import Parágrafo from "../../components/parágrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
      <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Parágrafo tipo="secundário" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam deleniti, quaerat molestias sint ratione culpa cupiditate fugiat aut repellat sit provident, aperiam voluptatem. Eos quod reprehenderit quaerat dolores aspernatur aliquid.</Parágrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=natcsouzaIT&show_icons=true&theme=dracula&include_all_commits=true&count_private=false"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=natcsouzaIT&layout=compact&langs_count=7&theme=dracula"/>
      </GithubSecao>
      </section>
)


export default Sobre
