import { ComponentPropsWithRef, ElementType } from 'react'
import { RouterLink } from '../RouterLink'
import { LinkProps } from 'react-router-dom'
import clsx from 'clsx'
import { Button, MerinioButtonProps } from '../Button'

type DropdownProps = ComponentPropsWithRef<'div'>

const Dropdown = (props: DropdownProps): JSX.Element => {
  return (
    <div className={clsx('dropdown', props.className)} {...props}>
      {props.children}
    </div>
  )
}

const DropdownToggle = (props: MerinioButtonProps) => {
  return (
    <Button {...props} className={clsx('dropdown-toggle', props.className)} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {props.children}
    </Button>
  )
}

const DropdownMenu = (props: ComponentPropsWithRef<'div'> & { direction?: 'left' | 'right' }) => {
  const directions = {
    right: 'dropdown-menu-right',
    left: 'dropdown-menu-left'
  } as const

  const directionClass = props.direction ? directions[props.direction] : null
  return (
    <div className={clsx('dropdown-menu', directionClass, props.className)} aria-labelledby="dropdownMenuButton">
      {props.children}
    </div>
  )
}

const DropdownItem = (props: Partial<LinkProps> & { as?: ElementType }) => {
  const Component = props.as ?? RouterLink
  return (
    <Component {...props} className={clsx('dropdown-item', props.className)}>
      {props.children}
    </Component>
  )
}

Dropdown.Toggle = DropdownToggle
Dropdown.Menu = DropdownMenu
Dropdown.Item = DropdownItem

export { Dropdown }
