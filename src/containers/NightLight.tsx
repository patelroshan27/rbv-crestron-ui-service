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

(window as any)["bridgeReceiveIntegerFromNative"] =
  bridgeReceiveIntegerFromNative;
(window as any)["bridgeReceiveBooleanFromNative"] =
  bridgeReceiveBooleanFromNative;
(window as any)["bridgeReceiveStringFromNative"] =
  bridgeReceiveStringFromNative;
(window as any)["bridgeReceiveObjectFromNative"] =
  bridgeReceiveObjectFromNative;



export default function NightLight() {
    const handleLightOn = () => {
      // Handle the click event here
      console.log(' handleLightOn clicked!');
      publishEvent("boolean", "4", true); 
      publishEvent("boolean", "4", false); 
    };
  
    const handleLightOff = () => {
        // Handle the click event here
        console.log('handleLightOff clicked!');
        publishEvent("boolean", "7", true);
        publishEvent("boolean", "7", true);
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
        Night Light
        </FormLabel>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
  
        <Button variant="contained" onClick={handleLightOn} sx={{ fontSize: 25 }} startIcon={<CgSmartHomeLight />}>
        On
        </Button>
        <Button variant="contained" onClick={handleLightOff} sx={{ fontSize: 25 }} startIcon={<CgSmartHomeLight />}>
          Off
        </Button>
  
        </Stack>
  
         </Box>
      )
  }