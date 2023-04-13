import { ElementType, ReactNode } from 'react'

type Children = { children: ReactNode | ReactNode[] }

type ListComponent = {
  children: Children['children']
  className?: string
  as?: ElementType
}

const List = (props: ListComponent): JSX.Element => {
  const Element = props.as ?? 'ul'

  return <Element className={`list-group ${props.className ?? ''}`}>{props.children}</Element>
}

type ListItemProps = {
  children: Children['children']
  isActive?: boolean
  className?: string
  disabled?: boolean
  as?: ElementType
}

const ListItem = (props: ListItemProps): JSX.Element => {
  const activeClassName = props.isActive ? 'active' : ''
  const disabledClassName = props.disabled ? 'disabled' : ''
  const Element = props.as ?? 'li'

  return <Element className={`list-group-item ${activeClassName} ${disabledClassName} ${props.className ?? ''} `}>{props.children}</Element>
}

List.Item = ListItem

export { List }
