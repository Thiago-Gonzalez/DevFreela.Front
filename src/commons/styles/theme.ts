import { COBALT, BLACK_SQUEEZE } from "../constants/colors";

const theme = {
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0
                }
            }
        }
    },
    palette: {
        primary: {
            main: COBALT,
        },
        background: {
            default: BLACK_SQUEEZE,
        }
    }
}

export default theme;