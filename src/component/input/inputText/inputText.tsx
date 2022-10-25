import TextField from "@mui/material/TextField";

export function InputText(props:any) {

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
        />
    )
}