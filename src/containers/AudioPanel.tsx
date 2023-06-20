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
import StepperComponent from '../components/StepperComponent';

(window as any)["bridgeReceiveIntegerFromNative"] =
  bridgeReceiveIntegerFromNative;
(window as any)["bridgeReceiveBooleanFromNative"] =
  bridgeReceiveBooleanFromNative;
(window as any)["bridgeReceiveStringFromNative"] =
  bridgeReceiveStringFromNative;
(window as any)["bridgeReceiveObjectFromNative"] =
  bridgeReceiveObjectFromNative;




const audioSources = ['Sarvasva Bed Room', 'Sarvasva Reading Room', 'Sarvasva Sun Room', 'Sarvasva Mulakat', 'Sabha Hall', 'Events', 'Akshardham'];

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));

function AudioSource() {
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
        Audio Source
      </FormLabel>
      <RadioGroup
        aria-labelledby="audiosource-label"
        defaultValue="Sarvasva Bed Room"
        size="lg"
        sx={{ gap: 1.5 }}
      >
        {audioSources.map((value) => (
          <Sheet
            key={value}
            sx={{
              p: 2,
              borderRadius: 'md',
              boxShadow: 'sm',
              bgcolor: 'background.body',
            }}
          >
            <Radio
              label={`${value}`}
              overlay
              disableIcon
              value={value}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    fontWeight: 'lg',
                    fontSize: 'lg'
                  },
                }),
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      '--variant-borderWidth': '2px',
                      '&&': {
                        // && to increase the specificity to win the base :hover styles
                        borderColor: theme.vars.palette.primary[500],
                      },
                    }),
                  }),
                }),
              }}
            />
          </Sheet>
        ))}
      </RadioGroup>
    </Box>
  );
}




export default function AudioPanel() {

  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        divider={<Divider orientation="vertical" />}
        spacing={1}
        justifyContent="center"
      >
        <Item><AudioSource></AudioSource></Item>
        <Item><StepperComponent label="Speech" signalName='1'  /></Item>
        <Item><StepperComponent label="Speaker" signalName='1' /></Item>

      </Stack>
    </Box>
  );
}

