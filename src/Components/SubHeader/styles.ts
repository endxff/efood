import styled from 'styled-components'
import trattoria from '../../Assets/fundoTrattoria.svg'

export const BackgroundTrattoria = styled.div`
  background-image: url(${trattoria});
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
`

export const TransBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 280px;
`

export const TextBox = styled.div`
  color: white;

  h2 {
    font-size: 32px;
    font-weight: 100;
    padding-top: 24px;
  }

  h3 {
    font-size: 32px;
    margin-top: 156px;
  }
`
