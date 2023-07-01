import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette:{
    primary: {
      main: '#124C5F',
      contrastText: 'white',
    }
  }
})

export {theme}