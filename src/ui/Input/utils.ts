const InputSize = {
  large: 'lg',
  small: 'sm'
} as const

type InputSizeProps = keyof typeof InputSize

export { InputSize }
export type { InputSizeProps }
