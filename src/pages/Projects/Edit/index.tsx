import { Layout } from "../../../containers/Layout"
import { ReactComponent as EditProjectBg } from "../../../assets/images/bg-edit-project.svg";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE_PATHS } from "../../../commons/constants/route-paths";
import { Grid, Typography } from "@mui/material";
import Button from "../../../components/Button";
import { Form, Formik } from "formik";
import { INITIAL_VALUES } from "../constants";
import { validateForm } from "../schemas";
import { Input } from "../../../components/Form/Input";
import { useEffect, useState } from "react";
import ProjectServices from "../../../services/api/projects";

interface ProjectProps {
  title: string;
  value: number;
  description: string;
}

export const EditProject = () => {
    const navigate = useNavigate();

    const { idProject } = useParams();
    const [selectedProject, setSelectedProject] = useState<ProjectProps>();

    useEffect(() => {
      ProjectServices.getProjectById(idProject)
        .then(({ data }) => setSelectedProject(data))
        .catch(error => console.log("Erro ao carregar dados do projeto: ", error))
    }, [])

    const onSubmit = (values: ProjectProps) => {
        ProjectServices.updateProject({ ...values }, idProject)
          .then(() => navigate(ROUTE_PATHS.projects))
          .catch(error => console.log("Erro ao atualizar projeto: ", error))
    }

    return (
      <Layout image={EditProjectBg}>
        <Formik
          initialValues={selectedProject ?? INITIAL_VALUES}
          validationSchema={validateForm}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="w-75 mb-3">
                <Typography variant="h2" fontWeight="bold">
                  Editar projeto
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
                <Button className="py-2" size="large" type="submit" fullWidth>
                  Salvar
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
    );
}