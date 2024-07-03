import { TagItem } from './styles'

export type Props = {
  children: string
}

const Tag = ({ children }: Props) => <TagItem>{children}</TagItem>

export default Tag
