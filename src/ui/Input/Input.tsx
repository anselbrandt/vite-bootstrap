import { ComponentPropsWithRef, FC, forwardRef } from 'react'
import clsx from 'clsx'

import { InputSize, InputSizeProps } from './utils'
export interface InputProps extends ComponentPropsWithRef<'input'> {
  variant?: InputSizeProps
}

const Input: FC<InputProps> = forwardRef(function Input(props, ref) {
  const { variant, ...rest } = props

  const classNamePrefix = 'form-control'
  const size = variant ? InputSize[variant] : ''
  const inputClassName = size ? `${classNamePrefix}-${size}` : undefined

  return <input {...rest} className={clsx(classNamePrefix, inputClassName, props.className)} ref={ref} />
})

export { Input }
