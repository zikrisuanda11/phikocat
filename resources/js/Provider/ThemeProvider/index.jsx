import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette:{
    primary: {
      main: '#124C5F',
      contrastText: 'white',
    }
  },
  typography:{
    fontFamily:[
      'figtree',
      'Inter',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  }
})

export {theme}