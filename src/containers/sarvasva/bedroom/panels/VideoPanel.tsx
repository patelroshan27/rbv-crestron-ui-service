import * as React from 'react';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy/styles';
import { FaVolumeUp, FaVolumeDown, FaVolumeMute, FaPowerOff, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Chip, IconButton, Slider } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';
import Button from '@mui/material/Button';
import StepperComponent from '../../../../components/StepperComponent';

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


export default function VideoPanel() {
  const videoSources: SourceSelectionProp[] = [{ buttonName: 'Wall Plate HDMI', signalName: '1' }, { buttonName: 'Wall Plate PC', signalName: '2' }, { buttonName: 'Building Feed', signalName: '3' }];

  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        divider={<Divider orientation="vertical" />}
        spacing={2}
        justifyContent="center"
      >
        <Item><SourceSelectionComponent label="Video Source" sourceSelectionProps={videoSources} ></SourceSelectionComponent></Item>

        <Item><StepperComponent label="HVAC" signalName='1' feedbackValueLabel='°F' /></Item>
      </Stack>
    </Box>
  );
}