import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


export const ColorButton = withStyles(() => ({
  root: {
    color: "white",
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "rgba(40, 179, 81, 0.89)",
    },
  },
}))(Button);
