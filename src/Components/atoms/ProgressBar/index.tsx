import { LinearProgress } from '@mui/material';
 import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
const barStyled =
{ height: '15px', 
  opacity: '0.5', 
  borderRadius: '0px 0px 10px 10px', 
  backgroundColor: '#DFE8F6'
}

const theme = createMuiTheme({
  palette: {
     secondary: {
         main: '#E1ECFC'
     }
  }
})

const ProgressBarComponent = ({value, ...props}:any) => {
    return (
      <MuiThemeProvider theme={theme}>
            <LinearProgress value={value} {...props} sx={barStyled} variant="determinate" color='secondary'/>
            </MuiThemeProvider>
    )
}

export default ProgressBarComponent;
