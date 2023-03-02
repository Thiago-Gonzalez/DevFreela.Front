import { Layout } from "../../../containers/Layout"
import { ReactComponent as UserRegisterBg } from "../../../assets/images/bg-user.svg";
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { ROUTE_PATHS } from "../../../commons/constants/route-paths";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { SANTAS_GRAY } from "../../../commons/constants/colors";

export const RegisterUser = () => {
    const navigate = useNavigate();

    return (
      <Layout image={UserRegisterBg}>
        <div className="w-100 mb-3">
          <Typography variant="h2" fontWeight="bold">
            Olá!
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Vamos Criar seu cadastro.
          </Typography>
        </div>
        <div className="w-100 mb-3">
          <Typography variant="body1" fontWeight="bold">
            Qual o seu perfil?
          </Typography>
          <FormControl>
            <RadioGroup row>
              <FormControlLabel value="dev" control={<Radio />} label="Dev" />
              <FormControlLabel
                value="customer"
                control={<Radio />}
                label="Cliente"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="w-75 mb-3">
          <TextField
            className="w-100 mb-2"
            label="Nome completo"
            variant="standard"
          />
          <TextField
            className="w-100 mb-2"
            label="Data de nacimento"
            variant="standard"
          />
          <TextField className="w-100 mb-2" label="Email" variant="standard" />
          <TextField className="w-100 mb-2" label="Senha" variant="standard" />
        </div>
        <div className="w-75 mb-3">
          <Button
            className="py-3"
            size="large"
            fullWidth
            onClick={() => navigate(ROUTE_PATHS.projects)}
          >
            Cadastrar
          </Button>

          <Typography
            className="text-center"
            color={SANTAS_GRAY}
            variant="body1"
          >
            Já possui uma conta?
            <Button
              variant="text"
              className="py-2"
              size="large"
              onClick={() => navigate(`${ROUTE_PATHS.home}`)}
            >
              Entre
            </Button>
          </Typography>
        </div>
      </Layout>
    );
}