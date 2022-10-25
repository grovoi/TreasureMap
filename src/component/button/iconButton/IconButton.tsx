import IconButton from '@mui/material/IconButton';

export default function IconButtons(props:any) {
  return (
      <IconButton type={props.type} aria-label={props.ariaLabel}>
        {props.icon}
      </IconButton>
  );
}