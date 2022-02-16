import { FC, ReactNode } from 'react'
import MuiInput, { TextFieldProps } from '@mui/material/TextField'

type Props = TextFieldProps & {
  children?: ReactNode
  styles?: { [key: string]: string }
}

export const Input: FC<Props> = (props: Props) => {
  const { children, variant = 'outlined', ...muiTextFieldProps } = props
  return (
    <MuiInput variant={variant} {...muiTextFieldProps}>
      {children}
    </MuiInput>
  )
}
