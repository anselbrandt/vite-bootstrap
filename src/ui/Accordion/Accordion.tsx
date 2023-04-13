import clsx from 'clsx'
import { ReactNode } from 'react'

type AccordionProps = {
  open: boolean
  defaultOpen?: boolean
  children: ReactNode | ReactNode[]
  className?: string
}

const Accordion = (props: AccordionProps): JSX.Element => {
  return <div className={clsx('collapse', props.open && 'show')}>{props.children}</div>
}

export { Accordion }
