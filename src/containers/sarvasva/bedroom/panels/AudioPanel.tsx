import * as React from 'react';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';

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
import StepperComponent from '../../../../components/StepperComponent';
import AudioSourceProp from '../../../../components/props/SourceSelectionProp';
import SourceSelectionComponent from '../../../../components/SourceSelectionComponent';
import SourceSelectionProp from '../../../../components/props/SourceSelectionProp';

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





export default function AudioPanel() {

  const sourceSelectionProps: SourceSelectionProp[] = [{ buttonName: 'Sarvasva Bed Room', signalName: '1' }, { buttonName: 'Sarvasva Reading Room', signalName: '2' }, { buttonName: 'Sarvasva Sun Room', signalName: '3' }, { buttonName: 'Sarvasva Mulakat', signalName: '4' }, { buttonName: 'Sabha Hall', signalName: '5' }, { buttonName: 'Events', signalName: '6' }, { buttonName: 'Akshardham', signalName: '7' }];

  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        divider={<Divider orientation="vertical" />}
        spacing={1}
        justifyContent="center"
        >
        <Item><SourceSelectionComponent label="Audio Source" sourceSelectionProps={sourceSelectionProps} ></SourceSelectionComponent></Item>
        <Item><StepperComponent label="Speech" signalName='1' /></Item>
        <Item><StepperComponent label="Speaker" signalName='1' /></Item>

      </Stack>
    </Box>
  );
}

