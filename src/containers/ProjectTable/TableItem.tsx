import { ReactComponent as PencilIcon } from '../../assets/images/icon-pencil.svg';
import { ReactComponent as TrashIcon } from '../../assets/images/icon-trash.svg';
import './styles.css';

interface TableItemProps {
    name: string,
    description: string,
    value: number
}

export const TableItem = ({ name, description, value } : TableItemProps) => {

    return(
        <div className="row table-line">
            <div className="col-7 title-column">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>

            <div className="col-3 value-column">
                <span>R$ {value}</span>
            </div>

            <div className="col-2 action-column">
                <PencilIcon onClick={() => alert("Editar!")} />
                <TrashIcon onClick={() => alert("Excluir!")} />
            </div>
        </div>
    )
}