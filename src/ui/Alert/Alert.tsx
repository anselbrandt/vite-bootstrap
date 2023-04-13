import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import { LinkProps } from 'react-router-dom'

import { Button } from '../Button'
import { RouterLink } from '../RouterLink'
import { Spinner } from '../Spinner'
import { BootstrapVariants } from '../utils'

type Children = { children: ReactNode | ReactNode[] }

type AlertVariant = keyof Pick<BootstrapVariants, 'success' | 'danger' | 'warning' | 'info' | 'secondary'>

type AlertProps = {
  children: Children['children']
  variant?: AlertVariant
  show?: boolean
  className?: string
  id?: string
  icon?: string
  noIcon?: boolean
  isLoading?: boolean
  onClose?: () => void
}

const AlertText: FC<Children> = props => {
  return <span>{props.children}</span>
}

const Alert = (props: AlertProps): JSX.Element | null => {
  const { onClose, noIcon, variant = 'danger', id, className, children, show = true, isLoading, icon } = props

  if (!show) return null

  return (
    <div id={id} className={`alert alert-${variant} ${className}`}>
      <MerinioAlertIcon noIcon={noIcon} variant={variant} icon={icon} isLoading={isLoading} />
      {onClose ? (
        <Button className="close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </Button>
      ) : null}
      {children}
    </div>
  )
}

type MerinioAlertIconProps = {
  variant?: AlertVariant
  icon?: string
  isLoading?: boolean
  noIcon?: boolean
}

const MerinioAlertIcon = (props: MerinioAlertIconProps): JSX.Element | null => {
  const { variant = 'danger', icon, isLoading, noIcon } = props
  const icons = {
    warning: 'exclamation-triangle',
    danger: 'exclamation-circle',
    success: 'check-circle',
    info: 'info-circle'
  } as const

  const defaultIcon = icons[variant]
  const iconType = icon || defaultIcon

  if (isLoading) return <Spinner />

  if (noIcon) return null

  return <i className={`fas fa-${iconType} mr-2`} />
}

type AlertLinkProps = LinkProps

const AlertLink: FC<AlertLinkProps> = props => {
  return (
    <RouterLink className={clsx('alert-link', props.className)} {...props}>
      {props.children}
    </RouterLink>
  )
}

type AlertTitle = {
  children?: Children['children']
}

const AlertTitle: FC<AlertTitle> = props => {
  return <h4 className="alert-heading">{props.children}</h4>
}

Alert.Link = AlertLink
Alert.Description = AlertText
Alert.Title = AlertTitle

export { Alert }
