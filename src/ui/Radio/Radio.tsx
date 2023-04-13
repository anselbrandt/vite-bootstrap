import { ComponentPropsWithRef, FC } from 'react'
import clsx from 'clsx'

export type RadioProps = ComponentPropsWithRef<'input'>

const Radio: FC<RadioProps> = props => {
  const { className, ...rest } = props
  return <input className={clsx('form-check-input', className ?? '')} type="radio" {...rest} />
}

export { Radio }
