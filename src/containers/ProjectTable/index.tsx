import { TableItem } from './TableItem';
import './styles.css';

import Data from '../../config.json';

export const ProjectTable = () => {
    const projects = Data.projects;

    return (
      <div className="table-container">
        {projects?.map(({ name, description, value }, index) => {
            return(
                <TableItem
                    key={index}
                    name={name}
                    description={description}
                    value={value}
                />
            )
        })}
      </div>
    );
}