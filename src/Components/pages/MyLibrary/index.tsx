/* eslint-disable @typescript-eslint/no-unused-vars */

import {useState} from 'react';
import {Container, Box} from '@mui/material';
import Typography from '../../atoms/Typography';
import Tab from '../../molecules/tabs';
import Card from '../../organisms/Card';
import CircularProgress from '@mui/material/CircularProgress';
import {Theme} from '../../../Themes/theme';
import { makeStyles } from '@mui/styles';
import { Button } from '@material-ui/core';

const useStyle = makeStyles({
    cards: {
        display: 'flex', 
        gap: '25px 19px',
        alignItems: 'center', 
        flexWrap: 'wrap'
    }
});

const MyLibrary = ({books, setBooks, library, setLibrary}:any) =>{
    const classes = useStyle();
    let data = library;
    
    const tabData = [
        { 
          'value': 'reading',
          'label': 'Currently reading',
        },
        { 
          'value': 'finished',
          'label': 'Finished',
        }
    ]
    const [currState, setCurrState] = useState(tabData[0].value);
    const handleState = (state:string) => {
        setCurrState(state);
    }

    const cards = () => {

        if(books.length === 0){

            return  <CircularProgress data-testid='circular-progress'/>
        }
        else {
            if(currState === 'reading'){
                return data.currentlyReading.map((curr:any) => {
                    let currData = books[Number.parseInt(curr.id)];
                    return currData && <Card 
                        cardId={currData.id}
                        key={currData.id}
                        imgHeight= {292}
                        url= {currData.url}
                        bookName= {currData.name}
                        writerName= {currData.writerName}
                        timeRead= {currData.timeRead}
                        width= {294.1}
                        inLibrary= {true}
                        progress= {curr.progress}
                        data-testid='cards-reading'
                    />
                })
            }else if(currState === 'finished'){
                return data.finishedBook.map((curr:any) => {
                    let currData = books[Number.parseInt(curr.id)];
                    return <Card 
                        cardId={currData.id}
                        key={currData.id}
                        imgHeight= {292}
                        url= {currData.url}
                        bookName= {currData.name}
                        writerName= {currData.writerName}
                        timeRead= {currData.timeRead}
                        width= {294.1}
                        inLibrary= {true}
                        progress= {100}
                        data-testid='cards-finished'
                    />
                });
            }
        }
    }


    

    return (
        <Container sx={{paddingTop: '50px', marginBottom:'100px',marginLeft:"125px"}}>
            <Typography variant1="h5" theme={Theme} mb={4}  sx={{display:'flex',justifyContent:'start', color:'#03314B', fontStyle:'Cera Pro',fontSize:'36px'}}>
                My Library
            </Typography>
            <Box sx={{}}>
            <Tab stateHandler={handleState} tabData={tabData}/>
            </Box>
            
            <Box className={classes.cards} mt={4}>
                { 
                    cards()
                }
            </Box>
        </Container>
    );
}

export default MyLibrary;