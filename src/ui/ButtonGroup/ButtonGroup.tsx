import { FC, ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  children: ReactNode
  vertical?: boolean | null
  toggle?: boolean
  size?: 'sm' | 'lg'
}
export const ButtonGroup: FC<Props> = ({ vertical, children, className, size, toggle }) => {
  const buttonGroupClassName = clsx(!vertical && 'btn-group', vertical && 'btn-group-vertical', size && `btn-group-${size}`, className)
  return (
    <div className={buttonGroupClassName} role="group" data-toggle={toggle ? 'buttons' : undefined}>
      {children}
    </div>
  )
}
