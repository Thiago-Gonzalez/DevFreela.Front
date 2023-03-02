import { Layout } from "../../containers/Layout"
import { ReactComponent as LoginBg } from "../../assets/images/bg-user.svg";
import { Grid, Typography } from "@mui/material";
import { ROUTE_PATHS } from "../../commons/constants/route-paths";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { SANTAS_GRAY } from "../../commons/constants/colors";
import { Formik, Form } from "formik";
import { validateForm } from "./schemas";
import { INITIAL_VALUES } from "./constants";
import { Input } from "../../components/Form/Input";

export const Login = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate(ROUTE_PATHS.projects);
    }

    return(
        <Layout image={LoginBg}>
            <Formik
                onSubmit={onSubmit}
                initialValues={INITIAL_VALUES}
                validationSchema={validateForm}
            >
                {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="w-75 mb-3">
                                <Typography variant="h2" fontWeight="bold">
                                    Entre ou faça seu cadastro
                                </Typography>
                            </div>

                            <div className="w-75 mb-3">
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Input name="email" label="E-mail" type="email" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Input name="password" label="Senha" type="password" />
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="w-75 mb-3">
                                <Button 
                                    className="py-2 mb-3" 
                                    size="large" 
                                    type="submit"
                                    fullWidth 
                                >
                                    Entrar
                                </Button>

                                <Typography className="text-center" color={SANTAS_GRAY} variant="body1">
                                    Ainda não possui uma conta?
                                    <Button 
                                        variant="text" 
                                        className="py-2" 
                                        size="large" 

                                        onClick={() => navigate(`${ROUTE_PATHS.users}/novo-usuario`)}
                                    >
                                        Cadastre-se
                                    </Button>
                                </Typography>
                            </div>
                        </Form>
                    )}
            </Formik>
        </Layout>
    )
}