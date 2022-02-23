import { FC, ReactNode } from 'react'
import MuiButton, { ButtonProps } from '@mui/material/Button'
import Colors from '@/styles/themes/colors'
import ClassNames from './Button.module.scss'

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
    <div>
      <MuiButton
        variant={variant}
        size={size}
        style={styles}
        className={ClassNames.button}
        {...muiButtonProps}
      >
        {children}
      </MuiButton>
    </div>
  )
}
