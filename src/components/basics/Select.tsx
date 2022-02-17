import { FC, ReactNode } from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'

type Props = TextFieldProps & {
  children?: ReactNode
  styles?: { [key: string]: string }
}

export const Select: FC<Props> = (props: Props) => {
  const { children, variant = 'outlined', ...muiTextFieldProps } = props
  return (
    <TextField select variant={variant} {...muiTextFieldProps}>
      {children}
    </TextField>
  )
}
