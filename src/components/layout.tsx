import { FC, ReactNode } from 'react'
import styles from './layout.module.scss'

type LayoutProps = { children: ReactNode }

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Layout
