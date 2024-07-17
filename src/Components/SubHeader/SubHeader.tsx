import Header from '../Header'
import trattoria from '../../Assets/fundoTrattoria.svg'
import { Background, TextBox, TransBox } from './styles'
import TrattoriaMenu from '../Menu'

export type Props = {
  titulo?: string
  tipo?: string
  capa: string
}

export const SubHeader = ({ capa, titulo, tipo }: Props) => (
  <>
    <Header header="category" capa={capa} />
    <Background capa={capa}>
      <TransBox>
        <div className="container">
          <TextBox>
            <h2>{tipo}</h2>
            <h3>{titulo}</h3>
          </TextBox>
        </div>
      </TransBox>
    </Background>
  </>
)
