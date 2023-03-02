import ProjectServices from "../index";
import api from "../../core/core-api";
import { MOCK_WITH_POST_AND_PUT_PROJECTS } from "../../../../unit-tests/mock-objects/projects";

const mockFn = jest.fn();

const projectsBasePath = "/projects";

const data = {
    data: {
        status: "OK",
    },
};

const idProject = "123";

afterEach(() => {
    jest.clearAllMocks();
});

beforeEach(() => {
    api.get = mockFn.mockResolvedValueOnce(data);
    api.post = mockFn.mockResolvedValueOnce(data);
    api.delete = mockFn.mockResolvedValueOnce(data);
    api.put = mockFn.mockResolvedValueOnce(data);
})

describe("[services] Projects", () => {
    describe("[GET VERB]", () => {
        it("fetches ProjectServices data from a get all projects", async () => {
            await expect(ProjectServices.getProjects()).resolves.toEqual(data);

            expect(mockFn).toHaveBeenCalledWith(projectsBasePath);
        });

        it("fetches successfully data from a get promotions id", async () => {
            await expect(ProjectServices.getProjectById(idProject)).resolves.toEqual(data);
        
            expect(mockFn).toHaveBeenCalledWith(`${projectsBasePath}/${idProject}`);
        });
    });

    describe("[POST VERB]", () => {
        it("fetches successfully data from a get a new promotion with data", async () => {
            await expect(ProjectServices.saveProject(MOCK_WITH_POST_AND_PUT_PROJECTS)).resolves.toEqual(data);
            
            expect(mockFn).toHaveBeenCalledWith(projectsBasePath, MOCK_WITH_POST_AND_PUT_PROJECTS);
        });
    });

    describe("[PUT VERB]", () => {
        it("fetches successfully data from a get a new promotion with data", async () => {
            await expect(ProjectServices.updateProject(MOCK_WITH_POST_AND_PUT_PROJECTS, idProject)).resolves.toEqual(data);

            expect(mockFn).toHaveBeenCalledWith(`${projectsBasePath}/${idProject}`, MOCK_WITH_POST_AND_PUT_PROJECTS);
        });
    });

    describe("[DELETE VERB]", () => {
        it("fetches successfully data from a get a new promotion with data", async () => {
            await expect(ProjectServices.deleteProject(idProject)).resolves.toEqual(data);

            expect(mockFn).toHaveBeenCalledWith(`${projectsBasePath}/${idProject}`);
        });
    });
});