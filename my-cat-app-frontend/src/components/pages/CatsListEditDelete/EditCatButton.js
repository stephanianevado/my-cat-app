import styled from "styled-components";
import {black} from "../../reusable/colors";
import {EditIcon} from "./caticons";
import {Link} from "react-router-dom";

const Button = styled.button`
  background-color: ${black};
  border: none;
  cursor: pointer;
`

export const EditCatButton = ({id}) => {
    return (
        <Link to={`/edit/${id}`}>
            <Button>
                <EditIcon/>
            </Button>
        </Link>
    )
}