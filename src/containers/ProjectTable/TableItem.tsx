import { Grid, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as PencilIcon } from '../../assets/images/icon-pencil.svg';
import { ReactComponent as TrashIcon } from '../../assets/images/icon-trash.svg';
import { ROUTE_PATHS } from '../../commons/constants/route-paths';
import { formatCurrency } from '../../commons/utils/money';
import { ActionColumnStyled, TableLineStyled, ValueColumnStyled } from './styles';

interface TableItemProps {
    idProject: string;
    title: string;
    description: string;
    value: number;
    onDelete: (idProject: string) => void;
}

export const TableItem = ({ idProject, title, description, value, onDelete } : TableItemProps) => {
    const navigate = useNavigate();

    return(
        <TableLineStyled container>
            <Grid item xs={7}>
                <Typography variant="h6" fontWeight="bold">{title}</Typography>
                <Typography variant="body1">{description}</Typography>
            </Grid>

            <ValueColumnStyled item xs={3}>
                <Typography variant="body1" fontWeight="bold">{formatCurrency(value)}</Typography>
            </ValueColumnStyled>

            <ActionColumnStyled item xs={2}>
                <IconButton onClick={() => navigate(`${ROUTE_PATHS.projects}/${idProject}`)}>
                    <PencilIcon />
                </IconButton>
                
                <IconButton onClick={() => onDelete(idProject)}>
                    <TrashIcon />
                </IconButton>
            </ActionColumnStyled>
        </TableLineStyled>
    )
}