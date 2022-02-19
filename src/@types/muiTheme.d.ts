import * as cratePalette from '@mui/material/styles/createPalette'
declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    danger?: PaletteColorOptions
  }

  interface Palette {
    danger: PaletteColor
  }
}
