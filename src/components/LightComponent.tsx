import * as React from 'react';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Stack from '@mui/joy/Stack';
import { CgSmartHomeLight } from 'react-icons/cg';
import Button from '@mui/material/Button';
import {
  bridgeReceiveIntegerFromNative,
  bridgeReceiveBooleanFromNative,
  bridgeReceiveStringFromNative,
  bridgeReceiveObjectFromNative,
} from "@crestron/ch5-crcomlib";

import { publishEvent } from "@crestron/ch5-crcomlib";
import {
  useSubscribeAnalog,
  useSubscribeSerial,
  useSubscribeDigital
} from "@norgate-av/react-hooks";
import LightProp from './LightProp';

(window as any)["bridgeReceiveIntegerFromNative"] =
  bridgeReceiveIntegerFromNative;
(window as any)["bridgeReceiveBooleanFromNative"] =
  bridgeReceiveBooleanFromNative;
(window as any)["bridgeReceiveStringFromNative"] =
  bridgeReceiveStringFromNative;
(window as any)["bridgeReceiveObjectFromNative"] =
  bridgeReceiveObjectFromNative;


  interface LightComponentProps {
    label: string;
    lightProps: LightProp[];
  }
  

export default function Light({label, lightProps} : LightComponentProps) {

    const handleClick = (signalName : string) => {
      // Handle the click event here
      console.log(' handleClick clicked!');
      publishEvent("boolean", signalName, true); 
      publishEvent("boolean", signalName, false); 
    };
  
       return (
      <Box sx={{ width: '100%' }}>
        <FormLabel
          id="projectpower-label"
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
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">

        {lightProps.map((lightProp) => (
                  <Button variant="contained" sx={{ fontSize: 25 }} onClick={() => handleClick(lightProp.signalName)  } startIcon={<CgSmartHomeLight />}>
        {lightProp.buttonName}
        </Button>
      ))}

        </Stack>
  
         </Box>
      )
  }