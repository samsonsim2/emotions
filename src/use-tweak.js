import React, { useState } from 'react';
 
import styled from '@emotion/styled';
import { Box,Typography } from '@mui/material'
const Label = styled(Typography)`
  text-transform: capitalize;
`;

// const Container = styled(Flex)`
//   &:not(:first-child) {
//     margin-top: ${props => props.theme.space[3]}px;
//   }
// `;

export function useTweak(name, config) {
  const [value, setValue] = useState(config.value);

  return [
    value,
    <Box alignItems="center">
      <Label as="label" htmlFor={name} fontSize={2} mr={3} mb={0}>
        {name}
      </Label>
      <Box
        as="input"
        flexGrow="1 1 auto"
        type="range"
        id={name}
        name={name}
        value={value}
        onChange={e => {
          setValue(parseFloat(e.target.value, 10));
        }}
        min={config.min}
        max={config.max}
        step={config.step}
      />
      <Typography fontSize={2} ml={3} mb={0} width={30} textAlign="right" flexGrow="none">
        {value}
      </Typography>
    </Box>,
    setValue,
  ];
}