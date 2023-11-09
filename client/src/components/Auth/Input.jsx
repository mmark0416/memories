import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";

import { Visibility, VisibilityOff } from "@material-ui/icons";

export const Input = ({
  name,
  handleChange,
  label,
  type,
  handleShowPassword,
  half,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
        xs={6}
      />
    </Grid>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  handleShowPassword: PropTypes.func,
  half: PropTypes.bool,
};
