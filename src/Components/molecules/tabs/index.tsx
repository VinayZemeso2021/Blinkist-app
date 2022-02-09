import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import tabTheme from '../../../Themes/tabsTheme';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((themes) => ({
  [themes.breakpoints.down('sm')]: {
      tab: {
      }
  },
}));
export default function TabsWrappedLabel({tabData, ...props}: any) {

  const classes = useStyles();
  const [value, setValue] = React.useState(tabData && tabData[0].value);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    props.stateHandler(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', width:'600px'  }}>
    <ThemeProvider theme={tabTheme}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        autoCapitalize="none"
        indicatorColor= "secondary"
        data-testid='tabs'
      >
        {
          tabData.map((currTab:any) => {
            return (
              <Tab 
              value={currTab.value} 
              label={currTab.label}   
              data-testid={`tab-${currTab.value}`}  
              sx={{textTransform: 'unset',fontSize:'16px',fontFamily:'Cera Pro',width: '294px', borderBottom: '2px solid #E1ECFC', alignItems: 'start'}}
              className={classes.tab}/>
            );
          })
        }
      </Tabs>
    </ThemeProvider>
    </Box>
  );
}