import { FC, ComponentPropsWithoutRef } from 'react'
import { Spinner } from '../Spinner'
import { ButtonColors, LinkColors, ButtonSizes, getColor, getSize } from './utils'

type CommonProps = {
  size?: ButtonSizes
  isLoading?: boolean
}

type ConditionalButtonProps =
  | { color?: keyof typeof LinkColors; outlined?: never; isLink?: boolean }
  | { color?: keyof typeof ButtonColors; outlined?: boolean; isLink?: never }

export type MerinioButtonProps = ComponentPropsWithoutRef<'button'> & CommonProps & ConditionalButtonProps

export const Button: FC<MerinioButtonProps> = props => {
  const { color, size, outlined, isLink, className, ...rest } = props
  const colorClassName = color ? getColor(color, outlined, isLink) : ''
  const sizeClassName = size ? getSize(size) : ''

  return (
    <button
      disabled={props.isLoading ?? props.disabled}
      className={`btn ${isLink ? 'btn-link shadow-none p-0' : ''} ${colorClassName} ${sizeClassName} ${className ?? ''}`}
      {...rest}
    >
      {props.children}
      {props.isLoading && <Spinner className="ml-2" />}
    </button>
  )
}
