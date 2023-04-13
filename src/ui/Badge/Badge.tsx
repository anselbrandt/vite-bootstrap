import { ComponentPropsWithoutRef, FC } from 'react'
import clsx from 'clsx'
import { BootstrapVariants } from '../utils'

type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  variant?: keyof Pick<BootstrapVariants, 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'>
  pill?: boolean
}

export const Badge: FC<BadgeProps> = props => {
  const { variant = 'primary', pill, children, className } = props

  const classNamePrefix = 'badge'

  const buttonGroupClassName = clsx(classNamePrefix, `${classNamePrefix}-${variant}`, pill && `${classNamePrefix}-pill`, className)

  return <span className={buttonGroupClassName}>{children}</span>
}
