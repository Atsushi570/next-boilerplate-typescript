import { FC, ReactNode } from 'react'
import styles from './layout.module.scss'

type LayoutProps = { children: ReactNode }

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.test}>{children}</div>
    </div>
  )
}

export default Layout
