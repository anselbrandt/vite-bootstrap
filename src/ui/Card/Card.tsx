import { FC, ReactNode } from 'react'

type Children = { children: ReactNode | ReactNode[] }

type CardComponent = {
  children: Children['children']
}

const Card = (props: CardComponent): JSX.Element => {
  return <div className="card">{props.children}</div>
}

const CardHeader: FC<Children & { className?: string }> = props => {
  return <div className={`card-header ${props.className ?? ''}`}>{props?.children}</div>
}

const CardTitle: FC<Children & { className?: string }> = props => {
  return <h5 className={`card-title ${props.className ?? ''}`}>{props?.children}</h5>
}

const CardBody: FC<Children & { className?: string }> = props => {
  return <div className={`card-body ${props.className ?? ''}`}>{props.children}</div>
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Title = CardTitle

export { Card }
