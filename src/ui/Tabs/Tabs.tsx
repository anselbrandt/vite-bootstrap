import { ReactNode } from 'react'
import clsx from 'clsx'

type Children = { children: ReactNode | ReactNode[] }

type TabsProps = {
  children: Children['children']
}

const Tabs = (props: TabsProps): JSX.Element => {
  return <ul className="nav nav-tabs">{props.children}</ul>
}

type TabItemProps = { children: Children['children']; key: string; tabKey: string; active: boolean; onSelect: (tabKey: string) => void }

const TabItem = (props: TabItemProps): JSX.Element => {
  const { children, tabKey, active, onSelect, key } = props
  const classNamePrefix = 'nav-link'
  const ButtonClassName = clsx(classNamePrefix, active && 'active')

  return (
    <li className="nav-item" key={key}>
      <button className={ButtonClassName} onClick={() => onSelect(tabKey)}>
        {children}
      </button>
    </li>
  )
}

Tabs.Item = TabItem

export { Tabs }
