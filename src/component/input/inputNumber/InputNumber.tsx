import TextField from "@mui/material/TextField";

export function InputNumber(props:any) {

    return (
        <TextField
          error={props.error}
        //   id="TMLong"
          label={props.label}
          defaultValue={props.defaultValue}
          value={props.value}
          helperText={props.ErrorMessage}
          required={props.required}
          onChange={props.onChange}
          fullWidth
          variant="standard" 
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          type='number'
        />
    )
}