import { Grid, Typography, Button } from '@mui/material'
import {makeStyles} from '@mui/styles'
import { Close,CheckCircleIcon,ErrorIcon ,InfoIcon} from "@mui/material/icon";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  alert: { padding: 10, borderRadius: 8, color: "#FFF", minWidth: 300 },
  success: { background: "#4CAF50" },
  info: { background: "#2196f3" },
  error: { background: "#F44336" },
  check: { color: "#4CAF50", background: "#FFF", borderRadius: 30 },
  close: { color: "#FFF" },
}));
function Alert({ type = "info", message, onClose }) {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={clsx(classes.alert, {
        [classes.success]: type === "success",
        [classes.info]: type === "info",
        [classes.error]: type === "error",
      })}
    >
      <Grid item>
        {type === "success" && (
          <CheckCircleIcon className={clsx(classes.check)} />
        )}
        {type === "info" && <InfoIcon />}
        {type === "error" && <ErrorIcon />}
      </Grid>
      <Grid item>
        <Typography variant="caption">{message}</Typography>
      </Grid>
      <Grid item>
        <Button onClick={onClose}>
          <Close className={clsx(classes.close)} />
        </Button>
      </Grid>
    </Grid>
  );
}
export default Alert;
