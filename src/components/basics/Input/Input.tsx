import { FC, ReactNode } from 'react'
import MuiInput, { TextFieldProps } from '@mui/material/TextField'
import Colors from '@/styles/themes/colors'

type Props = Omit<TextFieldProps, 'color'> & {
  children?: ReactNode
  styles?: { [key: string]: string }
  color?: keyof typeof Colors
}

export const Input: FC<Props> = (props: Props) => {
  const { children, variant = 'outlined', size = 'small', ...muiTextFieldProps } = props as any
  return (
    <MuiInput variant={variant} size={size} {...muiTextFieldProps}>
      {children}
    </MuiInput>
  )
}
