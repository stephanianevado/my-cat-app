import {TrashIcon} from "./caticons";
import styled from "styled-components";
import {black} from "../../reusable/colors";


const Button = styled.button`
  background-color: ${black};
  border: none;
  cursor: pointer;
`

export const DeleteCat = ({id, reFetchCats}) => {
    const deleteCat = async () => {
        await fetch(`http://localhost:8000/cats/${id}`, {
            method: 'DELETE',
        })
        reFetchCats()
    };


    return (
        <Button onClick={deleteCat}>
            <TrashIcon/>
        </Button>
    )
}

