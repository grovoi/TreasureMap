import * as React from 'react';
import Button from '@mui/material/Button';

export default function IconLabelButton(props:any) {
  return (
      <Button variant="contained" type={props.type} startIcon={props.icon} fullWidth onClick={props.onClick} onChange={props.onChange}>
        {props.label}
      </Button>
  );
}