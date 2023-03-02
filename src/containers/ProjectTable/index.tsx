import { TableItem } from './TableItem';

import { ActionColumnStyled, TableContainerStyled, ValueColumnStyled } from './styles';
import { Grid, Typography } from '@mui/material';
import { SANTAS_GRAY } from '../../commons/constants/colors';

interface ProjectTableProps {
  projects: {
    id: string,
    title: string,
    description: string,
    value: number
  }[];
  onDelete: (idProject: string) => void;
}

export const ProjectTable = ({ projects, onDelete } : ProjectTableProps) => {

    return (
      <TableContainerStyled>
        <Grid container>
          <Grid item xs={7}>
            <Typography color={SANTAS_GRAY} fontWeight="bold">Título</Typography>
          </Grid>
          <ValueColumnStyled item xs={3}>
            <Typography color={SANTAS_GRAY} fontWeight="bold">Custo Total</Typography>
          </ValueColumnStyled>
          <ActionColumnStyled item xs={2}>
            <Typography color={SANTAS_GRAY} fontWeight="bold">Ações</Typography>
          </ActionColumnStyled>
        </Grid>
        {projects?.map(({ id, title, description, value }, index) => {
            return(
                <TableItem
                    key={id}
                    idProject={id}
                    title={title}
                    description={description}
                    value={value}
                    onDelete={onDelete}
                />
            )
        })}
      </TableContainerStyled>
    );
}