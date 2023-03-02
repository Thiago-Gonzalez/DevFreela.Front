import { ReactComponent as RegisterProjectBg } from "../../../assets/images/bg-register-project.svg";
import { useNavigate } from "react-router-dom"
import { ROUTE_PATHS } from "../../../commons/constants/route-paths";
import { Layout } from "../../../containers/Layout";
import { Grid, Typography } from "@mui/material";
import Button from "../../../components/Button";
import { Form, Formik } from "formik";
import { INITIAL_VALUES } from "../constants";
import { validateForm } from "../schemas";
import { Input } from "../../../components/Form/Input";
import ProjectServices from "../../../services/api/projects";

interface ProjectProps {
    title: string;
    value: number;
    description: string;
}

export const RegisterProject = () => {
    const navigate = useNavigate();

    const onSubmit = (values : ProjectProps) => {
        ProjectServices.saveProject({ ...values })
            .then(() => {
                navigate(ROUTE_PATHS.projects);
            })
            .catch(error => alert(error.message))
    }

    return(
        <Layout image={RegisterProjectBg}>
            <Formik 
                initialValues={INITIAL_VALUES}
                validationSchema={validateForm}
                onSubmit={onSubmit}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>

                        <div className="w-75 mb-3">
                            <Typography variant="h2" fontWeight="bold">
                                Vamos cadastrar seu novo projeto!
                            </Typography>
                        </div>

                        <div className="w-50 mb-3">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Input name="title" label="Título" />
                                </Grid>

                                <Grid item xs={12}>
                                    <Input name="value" label="Custo Total" />
                                </Grid>

                                <Grid item xs={12}>
                                    <Input name="description" label="Descrição" />
                                </Grid>
                            </Grid>
                        </div>

                        <div className="w-50 mb-3">
                            <Button 
                                className="py-2" 
                                size="large" 
                                type="submit"
                                fullWidth 
                            >
                                Cadastrar
                            </Button>

                            <Button
                                className="py-3 mb-3"
                                size="large"
                                variant="text"
                                onClick={() => navigate(ROUTE_PATHS.projects)}
                                fullWidth
                            >
                                Voltar
                            </Button>
                        </div>
                    </Form>
                )}

            </Formik>
        </Layout>
    )
}