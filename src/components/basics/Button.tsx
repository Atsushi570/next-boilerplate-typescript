import { FC, ReactNode } from 'react'
import MuiButton, { ButtonProps } from '@mui/material/Button'

type Props = ButtonProps & {
  children?: ReactNode
  styles?: { [key: string]: string }
}

export const Button: FC<Props> = (props: Props) => {
  const {
    children,
    variant = 'outlined',
    styles = { textTransform: 'none' },
    ...muiButtonProps
  } = props
  return (
    <MuiButton variant={variant} style={styles} {...muiButtonProps}>
      {children}
    </MuiButton>
  )
}
