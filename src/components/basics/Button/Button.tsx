import { FC, ReactNode } from 'react'
import MuiButton, { ButtonProps } from '@mui/material/Button'
import Colors from '@/styles/themes/colors'

type Props = Omit<ButtonProps, 'color'> & {
  children?: ReactNode
  styles?: { [key: string]: string }
  color?: keyof typeof Colors
}

export const Button: FC<Props> = (props: Props) => {
  const {
    children,
    variant = 'outlined',
    size = 'small',
    styles = { textTransform: 'none' },
    ...muiButtonProps
  } = props as any

  return (
    <MuiButton variant={variant} size={size} style={styles} {...muiButtonProps}>
      {children}
    </MuiButton>
  )
}
