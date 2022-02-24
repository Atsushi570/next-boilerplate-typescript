import { FC, ReactNode } from 'react'
import { makeStyles } from '@mui/styles'
import MuiInput, { TextFieldProps } from '@mui/material/TextField'
import Colors from '@/styles/themes/colors'

type Props = Omit<TextFieldProps, 'color'> & {
  children?: ReactNode
  styles?: { [key: string]: string }
  color?: keyof typeof Colors
}

const useStyles = makeStyles(() => ({
  input: {
    '& .Mui-focused': {
      backgroundColor: () => Colors.danger,
    },
  },
}))

export const Input: FC<Props> = (props: Props) => {
  const { children, variant = 'outlined', size = 'small', ...muiTextFieldProps } = props as any
  const classes = useStyles()

  return (
    <MuiInput className={classes.input} variant={variant} size={size} {...muiTextFieldProps}>
      {children}
    </MuiInput>
  )
}
