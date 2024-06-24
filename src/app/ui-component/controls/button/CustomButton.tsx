import { Button } from '@mui/material';
import React from 'react'

export default function CustomButton(props: any) {
  const { text, size, color, variant, ...other } = props;
  return (
    <>
      <Button
        variant={variant || "contained"}
        size={size || "medium"}
        color={color || "primary"}
        sx={{ borderRadius: '16px',backgroundColor: 'black' }}
        {...other}
      >
        {text}
      </Button>
    </>
  )
}
