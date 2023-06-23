import * as React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/joy/styles';
import {
  bridgeReceiveIntegerFromNative,
  bridgeReceiveBooleanFromNative,
  bridgeReceiveStringFromNative,
  bridgeReceiveObjectFromNative,
} from "@crestron/ch5-crcomlib";

import LightComponent from '../../../../components/LightComponent';


import { publishEvent } from "@crestron/ch5-crcomlib";
import {
  useSubscribeAnalog,
  useSubscribeSerial,
  useSubscribeDigital
} from "@norgate-av/react-hooks";
import LightProp from '../../../../components/props/LightProp';

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


export default function LightPanel() {

  const lightProps: LightProp[] = [{ buttonName: 'High', signalName: '1' }, { buttonName: 'Medium', signalName: '2' }, { buttonName: 'Low', signalName: '3' }, { buttonName: 'Off', signalName: '4' }];
  const ceilingLightProps: LightProp[] = [{ buttonName: 'High', signalName: '5' }, { buttonName: 'Medium', signalName: '6' }, { buttonName: 'Low', signalName: '7' }, { buttonName: 'Off', signalName: '8' }];
  const spotProps: LightProp[] = [{ buttonName: 'High', signalName: '9' }, { buttonName: 'Medium', signalName: '10' }, { buttonName: 'Low', signalName: '11' }, { buttonName: 'Off', signalName: '12' }];
  const nightProps: LightProp[] = [{ buttonName: 'On', signalName: '13' }, { buttonName: 'Off', signalName: '14' }];

  return (
    <Grid container spacing={0}>
      <Grid xs={6}>
        <Card >
          <Item><LightComponent label='Light' lightProps={lightProps} ></LightComponent></Item>
          <Item><LightComponent label='Ceiling Light' lightProps={ceilingLightProps} ></LightComponent></Item>
        </Card>
      </Grid>
      <Grid xs={6}>
        <Card >
          <Item><LightComponent label='Spot Light' lightProps={spotProps} ></LightComponent></Item>
          <Item><LightComponent label='Night Light' lightProps={nightProps} ></LightComponent></Item>
        </Card>
      </Grid>
    </Grid>
  );
}