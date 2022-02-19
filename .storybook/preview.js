import { ThemeProvider } from '@mui/material/styles'
import theme from '../src/styles/themes/MuiTheme'
import '../src/styles/globals.css'
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <div id="__next">
      <Emotion10ThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </Emotion10ThemeProvider>
    </div>
  ),
]
