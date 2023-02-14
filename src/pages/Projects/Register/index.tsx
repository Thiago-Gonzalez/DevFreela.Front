import { useNavigate } from "react-router-dom"
import { ROUTE_PATHS } from "../../../commons/constants/route-paths";
import Button from "../../../components/Button";


export const RegisterProject = () => {
    const navigate = useNavigate();

    return(
        <div>
            <Button onClick={() => navigate(ROUTE_PATHS.projects)}>
                Voltar
            </Button>

            <p>Register Project</p>
        </div>
    )
}