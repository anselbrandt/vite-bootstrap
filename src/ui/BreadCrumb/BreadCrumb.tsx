import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

import { RouterLink } from '../RouterLink'

type Children = { children: ReactNode | ReactNode[] }

type BreadCrumbProps = {
  children: Children['children']
  className?: string
}

const BreadCrumb = (props: BreadCrumbProps): JSX.Element => {
  const classNamePrefix = 'breadcrumb merinio-nav-breadcrumb'
  const breadCrumbListClassName = clsx(classNamePrefix, props.className)
  return (
    <nav aria-label="breadcrumb">
      <ol className={breadCrumbListClassName}>{props.children}</ol>
    </nav>
  )
}

type BreadCrumbItemProps = LinkProps & { active?: boolean; notAvailable?: boolean }

const BreadCrumbItem: FC<BreadCrumbItemProps> = props => {
  const { active, notAvailable, className, children } = props
  const classNamePrefix = 'breadcrumb-item'
  const breadCrumbListClassName = clsx(classNamePrefix, active && 'active', className)
  const showLink = !active && !notAvailable
  return (
    <li className={breadCrumbListClassName} aria-current={active ? 'page' : undefined}>
      {showLink ? <RouterLink {...props}>{props.children}</RouterLink> : children}
    </li>
  )
}

BreadCrumb.Item = BreadCrumbItem

export { BreadCrumb }
