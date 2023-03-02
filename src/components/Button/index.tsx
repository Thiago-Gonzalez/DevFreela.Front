import { Button } from '@mui/material';

const ButtonComponent = ({ children, ...props } : any) => {
    return <Button 
        disableElevation={true}
        variant="contained"
        style={{
            height: "40px",
            borderRadius: "40px",
            textTransform: "inherit",
            fontSize: "14px",
            fontWeight: "bold"
        }}
        {...props}
    >{children}</Button>
}

export default ButtonComponent;

// const ButtonPatternStyled = styled(Button)`
//     && {
//         height: 40px;
//         border-radius: 40px;
//         text-transform: inherit;
//         font-size: 14px;
//         font-weight: bold;
//     }
// `

// ButtonPatternStyled.defaultProps = {
//     disableElevation: true,
//     variant: "contained"
// }

// export default ButtonPatternStyled;