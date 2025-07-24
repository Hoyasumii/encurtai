import { DAO } from "./DataAccessObject";
import { Service } from "./Service";

const dataAccessObject = new DAO();
export default new Service(dataAccessObject);
