import { createTheme } from '@mui/material/styles'
import Colors from './colors.js'

export default createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    success: {
      main: Colors.success,
    },
    info: {
      main: Colors.info,
    },
    warning: {
      main: Colors.warning,
    },
    danger: {
      main: Colors.danger,
    },
  },
})
