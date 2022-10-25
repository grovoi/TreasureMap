import Button from '@mui/material/Button';

export default function BasicButtons(props:any) {
  return (
      <Button type={props.type}  variant="contained">{props.label}</Button>
  );
}