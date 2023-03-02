import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../commons/constants/route-paths";
import { PageTitle } from "../../../components/PageTitle";
import { ProjectTable } from "../../../containers/ProjectTable";
import { useEffect, useState } from "react";
import ProjectServices from "../../../services/api/projects";

interface ProjectProps {
  id: string;
  title: string;
  value: number;
  description: string;
}

export const Projects = () => {
    const navigate = useNavigate();

    const [projects, setProjects] = useState<ProjectProps[]>([]);

    const getProjects = () => {
      ProjectServices.getProjects()
        .then(({ data }) => {
          setProjects(data);
        })
        .catch(error => console.log("Erro na requisição: " , error))
    }

    useEffect(() => {
      getProjects();
    }, [])

    const actionButtonProps = {
      label: "Novo Projeto",
      action: () => navigate(`${ROUTE_PATHS.projects}/novo-projeto`),
    };

    const onDelete = (idProject: string) => {
      ProjectServices.deleteProject(idProject)
        .then(() => getProjects())
        .catch(error => console.log("Error", error))
    }

    return (
      <div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div style={{ width: "800px", paddingTop: "48px" }}>
            <PageTitle title="Projetos" actionButton={actionButtonProps} />
            <ProjectTable projects={projects} onDelete={onDelete} />
          </div>
        </div>
      </div>
    );
}