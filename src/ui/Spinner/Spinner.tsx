import { FC } from 'react'
import { SpinnerSizes } from './utils'
import clsx from 'clsx'

type SpinnerProps = { size?: SpinnerSizes; className?: string; variant?: 'third' }

export const Spinner: FC<SpinnerProps> = ({ size, variant }) => {
  const classNameWithVariant = variant ? `fa-spinner-${variant}` : 'fa-spinner'
  const classNameWithSize = size ? `fa-${size}` : ''

  return <i className={clsx('fa-regular', 'fa-spin', classNameWithVariant, classNameWithSize)}></i>
}
