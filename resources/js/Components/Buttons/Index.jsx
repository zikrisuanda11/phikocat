import { Button } from "@mui/material"

function Buttons({title, size, variant, backgroundColor, textColor, endIcon}){
  return (
    <Button 
    sx={{textTransform: 'Capitalize', 
    backgroundColor: backgroundColor,
    color: textColor,
    ":hover": {
      backgroundColor: backgroundColor
    }}} disableElevation size={size} variant={variant} endIcon={endIcon}>{title}</Button>
  )
}

export default Buttons;