import { TextField, Typography } from "@mui/material";
import { Field, FieldProps} from "formik";

interface InputProps {
    name: string;
    label: string;
    type?: string;
}

export const Input = (props : InputProps) => {

    return(
        <Field {...props}>
            {({ field, meta } : FieldProps) => (
                <div className="mb-1">
                    <TextField 
                        label={props.label}
                        inputProps={{ ...field, ...props }}
                        className="w-100"
                        variant="standard"
                    />
                    {meta.touched && meta.error && (
                        <div className="p-relative" >
                            <Typography className="p-absolute"variant="caption" color="error" >{meta.error}</Typography>
                        </div>
                    )}
                </div>
            )}
        </Field>
    )
}