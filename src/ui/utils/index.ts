export const LinkColors = {
  complementary: 'text-secondary',
  info: 'text-info',
  error: 'text-danger'
} as const

export const ButtonColors = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  success: 'btn-success',
  error: 'btn-danger'
} as const

const ColorsOutlined = {
  primary: 'btn-outline-primary',
  secondary: 'btn-outline-secondary',
  success: 'btn-outline-success',
  error: 'btn-outline-danger'
} as const

export type LinkSizes = keyof typeof Sizes
export type LinkColors = keyof typeof LinkColors

export const getColor = (color: Colors, outlined?: boolean, isLink?: boolean): string => {
  if (isLink) return LinkColors[color]
  if (outlined) return ColorsOutlined[color]
  return ButtonColors[color]
}

export type Colors = keyof typeof ButtonColors | keyof typeof LinkColors

export const Sizes = {
  large: 'btn-lg',
  small: 'btn-sm'
} as const

export type ButtonSizes = keyof typeof Sizes

export const getSize = (size: keyof typeof Sizes): string => {
  return Sizes[size]
}

export type BootstrapVariants = {
  primary: 'primary'
  secondary: 'secondary'
  success: 'success'
  danger: 'danger'
  warning: 'warning'
  info: 'info'
  light: 'light'
  dark: 'dark'
  link: 'link'
}
