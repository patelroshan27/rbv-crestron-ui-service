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
import CeilingLight from './CeilingLight';
import SpotLight from './SpotLight';
import NightLight from './NightLight';


import { publishEvent } from "@crestron/ch5-crcomlib";
import {
  useSubscribeAnalog,
  useSubscribeSerial,
  useSubscribeDigital
} from "@norgate-av/react-hooks";
import LightProp from '../components/LightProp';

(window as any)["bridgeReceiveIntegerFromNative"] =
  bridgeReceiveIntegerFromNative;
(window as any)["bridgeReceiveBooleanFromNative"] =
  bridgeReceiveBooleanFromNative;
(window as any)["bridgeReceiveStringFromNative"] =
  bridgeReceiveStringFromNative;
(window as any)["bridgeReceiveObjectFromNative"] =
  bridgeReceiveObjectFromNative;


const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));


export default function VideoPanel() {
  
  const lightProps : LightProp[] = [{buttonName: 'High', signalName : '1' }, {buttonName: 'Medium', signalName : '2' }, {buttonName: 'Low', signalName : '3' }, {buttonName: 'Off', signalName : '4' } ];
  const ceilingLightProps : LightProp[] = [{buttonName: 'High', signalName : '5' }, {buttonName: 'Medium', signalName : '6' }, {buttonName: 'Low', signalName : '7' }, {buttonName: 'Off', signalName : '8' } ];
  const spotProps : LightProp[] = [{buttonName: 'High', signalName : '9' }, {buttonName: 'Medium', signalName : '10' }, {buttonName: 'Low', signalName : '11' }, {buttonName: 'Off', signalName : '12' } ];
  const nightProps : LightProp[] = [{buttonName: 'On', signalName : '13' }, {buttonName: 'Off', signalName : '14' } ];
  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        divider={<Divider orientation="vertical" />}
        spacing={0}
        justifyContent="center"
      >
        <Item><Light label='Light' lightProps={lightProps} ></Light></Item>
        <Item><Light label='Ceiling Light' lightProps={ceilingLightProps} ></Light></Item>
        <Item><Light label='Spot Light' lightProps={spotProps} ></Light></Item>
        <Item><Light label='Night Light' lightProps={nightProps} ></Light></Item>

        {/* <Item><Curtain></Curtain></Item> */}
        {/* <Item><HVAC></HVAC></Item> */}
      </Stack>
    </Box>
  );
}