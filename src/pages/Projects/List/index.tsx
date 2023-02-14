import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../commons/constants/route-paths";
import { PageTitle } from "../../../components/PageTitle";
import { ProjectTable } from "../../../containers/ProjectTable";


export const Projects = () => {
    const navigate = useNavigate();

    const actionButtonProps = {
      label: "Novo Projeto",
      action: () => navigate(`${ROUTE_PATHS.projects}/novo-projeto`),
    };

    return (
      <div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div style={{ width: "800px", paddingTop: "48px" }}>
            <PageTitle title="Projetos" actionButton={actionButtonProps} />
            <ProjectTable />
          </div>
        </div>
      </div>
    );
}