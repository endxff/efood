import estrela from '../../Assets/estrela.png'

export type Props = {
  children: string
}

const Rating = ({ children }: Props) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>{children}</span>
      <img style={{ marginLeft: '8px' }} src={estrela} alt="Estrela" />
    </div>
  )
}

export default Rating
