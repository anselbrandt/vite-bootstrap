import clsx from 'clsx'
import { ComponentPropsWithRef, FC } from 'react'

export type CheckboxProps = ComponentPropsWithRef<'input'>

const Checkbox: FC<CheckboxProps> = props => {
  const { className, ...rest } = props

  return <input className={clsx('form-check-input', props.className ?? '')} type="checkbox" {...rest} />
}

export { Checkbox }
