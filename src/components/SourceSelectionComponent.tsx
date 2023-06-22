import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';

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
import AudioSourceProp from './props/SourceSelectionProp';
import SourceSelectionProp from './props/SourceSelectionProp';

(window as any)["bridgeReceiveIntegerFromNative"] =
  bridgeReceiveIntegerFromNative;
(window as any)["bridgeReceiveBooleanFromNative"] =
  bridgeReceiveBooleanFromNative;
(window as any)["bridgeReceiveStringFromNative"] =
  bridgeReceiveStringFromNative;
(window as any)["bridgeReceiveObjectFromNative"] =
  bridgeReceiveObjectFromNative;

  interface SourceSelectionProps {
    label: string;
    sourceSelectionProps: SourceSelectionProp[];
  }
  

export default function SourceSelectionComponent({ label, sourceSelectionProps }: SourceSelectionProps) {
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
        <RadioGroup
          aria-labelledby="audiosource-label"
          defaultValue="Sarvasva Bed Room"
          size="lg"
          sx={{ gap: 1.5 }}
        >
          {sourceSelectionProps.map((sourceSelectionProp) => (
            <Sheet
              key={sourceSelectionProp.buttonName}
              sx={{
                p: 2,
                borderRadius: 'md',
                boxShadow: 'sm',
                bgcolor: 'background.body',
              }}
            >
              <Radio
                label={`${sourceSelectionProp.buttonName}`}
                overlay
                disableIcon
                value={sourceSelectionProp.buttonName}
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
  