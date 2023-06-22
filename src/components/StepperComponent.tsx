import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid'; 
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  bridgeReceiveIntegerFromNative,
  bridgeReceiveBooleanFromNative,
  bridgeReceiveStringFromNative,
  bridgeReceiveObjectFromNative,
} from "@crestron/ch5-crcomlib";

import { publishEvent } from "@crestron/ch5-crcomlib";
import {
  useSubscribeAnalog
} from "@norgate-av/react-hooks";
import React from 'react';

(window as any)["bridgeReceiveIntegerFromNative"] =
  bridgeReceiveIntegerFromNative;
(window as any)["bridgeReceiveBooleanFromNative"] =
  bridgeReceiveBooleanFromNative;
(window as any)["bridgeReceiveStringFromNative"] =
  bridgeReceiveStringFromNative;
(window as any)["bridgeReceiveObjectFromNative"] =
  bridgeReceiveObjectFromNative;


interface StepperProps {
  label: string,
  signalName : string,
  feedbackValueLabel? : string
}

export default function Stepper({label, signalName, feedbackValueLabel} : StepperProps) {

  const [currentValue, setCurrentValue] = React.useState<number>(72);
  const currentFeedback = useSubscribeAnalog(signalName);

  React.useEffect(() => {
    setCurrentValue(currentFeedback);
  }, [currentFeedback])

  const handleChange = (operation : "+" | "-") => {
    let updatedValue = currentValue;
    if(operation === '+') updatedValue =  currentValue+1;
    else if(operation === '-') updatedValue =  currentValue-1;

    publishEvent("number", signalName, updatedValue);
    //setCurrentValue(updatedValue);

  };
    return (
    <Box sx={{ width: 300 }}>
    <FormLabel
      id="audiosource-label"
      sx={{
        mb: 2,
        fontWeight: 'xl',
        textTransform: 'uppercase',
        fontSize: 'xs',
        letterSpacing: '0.15rem',
      }}
    >
      {label}
    </FormLabel>
    <Grid container spacing={1}>
      <Grid xs={6}>
        <Card >
          <Typography component="div" variant="h2">
            {currentValue}
          </Typography>
          {/* {feedbackValueLabel ? <Typography component="div">
            {feedbackValueLabel}
          </Typography> : null} */}
        </Card>
      </Grid>
      <Grid xs={3} sx={{padding: '20px'}}>
        <Fab color="primary" onClick={() => handleChange('+')}   aria-label="add">
          <AddIcon  />
        </Fab>
      </Grid>
      <Grid xs={3} sx={{padding: '20px'}}>
        <Fab color="primary" onClick={() => handleChange('-')} aria-label="minus">
          <RemoveIcon />
        </Fab>
      </Grid>
    </Grid>
    </Box>  
  )
}
