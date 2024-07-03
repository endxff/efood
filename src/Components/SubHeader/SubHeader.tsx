import Header from '../Header'
import trattoria from '../../Assets/fundoTrattoria.svg'
import { BackgroundTrattoria, TextBox, TransBox } from './styles'
import TrattoriaMenu from '../Menu'

export const SubHeader = () => (
  <>
    <Header headerStyle="category" />
    <BackgroundTrattoria>
      <TransBox>
        <div className="container">
          <TextBox>
            <h2>Italiana</h2>
            <h3>La Dolce Vita Trattoria</h3>
          </TextBox>
        </div>
      </TransBox>
    </BackgroundTrattoria>
  </>
)
