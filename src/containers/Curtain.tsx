import * as React from 'react';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';
import { MdHvac, MdCurtainsClosed, MdOutlineCurtains, MdOutlineCurtainsClosed } from 'react-icons/md';
import { TbTemperaturePlus, TbTemperatureMinus } from 'react-icons/tb';
import Button from '@mui/material/Button';
import {
  bridgeReceiveIntegerFromNative,
  bridgeReceiveBooleanFromNative,
  bridgeReceiveStringFromNative,
  bridgeReceiveObjectFromNative,
} from "@crestron/ch5-crcomlib";
import Light from '../components/LightComponent';

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




export default function Curtain() {
    const handleCurtainOpen = () => {
      // Handle the click event here
      console.log('handleCurtainOpen clicked!');
    };
  
    const handleCurtainClose = () => {
      // Handle the click event here
      console.log('handleCurtainClose clicked!');
    };
  
    const handleCurtainStop = () => {
      // Handle the click event here
      console.log('handleCurtainStop clicked!');
    };
  
  
       return (
      <Box sx={{ width: 400 }}>
        <FormLabel
          id="projectscreen-label"
          sx={{
            mb: 2,
            fontWeight: 'xl',
            textTransform: 'uppercase',
            fontSize: 'xs',
            letterSpacing: '0.15rem',
          }}
        >
          Curtain
        </FormLabel>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
  
        <Button variant="contained" onClick={handleCurtainOpen} startIcon={<MdOutlineCurtains />}>
          Curtain Open
        </Button>
        <Button variant="contained" onClick={handleCurtainClose}  startIcon={<MdCurtainsClosed />}>
          Curtain Close
        </Button>
        <Button variant="contained" onClick={handleCurtainStop}  startIcon={<MdOutlineCurtainsClosed />}>
          Curtain Stop
        </Button>
  
        </Stack>
  
         </Box>
      )
  }
  
  