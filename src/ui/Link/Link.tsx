import { FC, ComponentPropsWithoutRef } from 'react'
import { LinkSizes, LinkColors, getColor, getSize } from './utils'

export type MerinioLinkProps =
  | ComponentPropsWithoutRef<'a'> &
      (
        | {
            color?: LinkColors
            href?: never
            isExternal?: boolean
            onClick?: () => void
            size?: LinkSizes
          }
        | {
            color?: LinkColors
            href?: string
            isExternal?: boolean
            onClick?: never
            size?: LinkSizes
          }
      )

export const Link: FC<MerinioLinkProps> = props => {
  const { color, size, onClick, href, isExternal, className, children, ...rest } = props
  const colorClassName = color ? getColor(color) : ''
  const sizeClassName = size ? getSize(size) : ''
  const externalProps = !onClick && isExternal ? { target: 'blank', rel: 'noreferrer' } : {}

  return (
    <a
      onClick={e => {
        if (!onClick) return
        e.preventDefault()
        onClick()
      }}
      href={href ?? ''}
      className={`${colorClassName} ${sizeClassName} ${className ?? ''}`}
      {...rest}
      {...externalProps}
    >
      {children}
    </a>
  )
}
