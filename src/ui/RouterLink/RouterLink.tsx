import { Link, LinkProps } from 'react-router-dom'

export const RouterLink = ({ className, children, ...props }: LinkProps): JSX.Element => {
  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  )
}
