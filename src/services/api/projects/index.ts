import api from "../core/core-api";

interface projectProps {
    title: string;
    value: number;
    description: string;
}

const basePath = "/projects";

const projects = {
    getProjects() {
        return api.get(`${basePath}`)
    },
    getProjectById(idProject?: string) {
        return api.get(`${basePath}/${idProject}`)
    },
    saveProject(projectData: projectProps) {
        return api.post(`${basePath}`, { ...projectData })
    },
    deleteProject(idProject?: string) {
        return api.delete(`${basePath}/${idProject}`)
    },
    updateProject(projectData: projectProps, idProject?: string) {
        return api.put(`${basePath}/${idProject}`, { ...projectData })
    }
};

export default projects;