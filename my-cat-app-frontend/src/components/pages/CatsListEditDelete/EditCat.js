import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Title} from "../../reusable/Title";
import {SaveIcon} from "../CreateCat/savebutton";
import styled from "styled-components";
import {Breakpoints} from "../../reusable/Breakpoints";
import {black, blue, yellow} from "../../reusable/colors";

const Main = styled.main`
  padding: 0rem 2rem;
  ${Breakpoints.laptop} {
    padding: 0rem 3rem;
  }
`
const Form = styled.form`
  font-size: 0.8rem;
  max-width: 13rem;
  margin: 1rem auto;
  min-height: 18rem;
  border: 0.8rem solid ${blue};
  padding: 2rem;
  border-radius: 0.5rem;display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    color: ${yellow}
  }
  ${Breakpoints.laptop} {
    font-size: 1rem;
    max-width: 15rem;
    min-height: 20rem;
  }
`

const Label = styled.label`
 padding: 0.2rem;
 ${Breakpoints.laptop} {
   padding: 1rem;
 }
`

const SaveButton = styled.button`
  margin: 1rem;
  padding: 1rem;
  background-color: ${black};
  &:hover{
    color: ${blue};
  }
  ${Breakpoints.laptop} {
    margin: 2rem;
  }
`
export const EditCat = () => {
    let {id} = useParams();
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    useEffect(() => {
        const fetchCat = async () => {
            const response = await fetch(
                `http://localhost:8000/cats/${id}`,
            );
            const data = await response.json();
            setName(data.name)
            setAge(data.age);
        }
        fetchCat();
    }, [id]);

    const editCat = () => fetch(`http://localhost:8000/cats/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, age})
    })

    return (
        <Main>
            <Title number='02' title='Edit your cat'/>
            <Form onSubmit={editCat}>
                <div>
                    <h1>Fill up the form</h1>
                    <Label>Name</Label>
                    <input
                        type='text'
                        placeholder='Edit Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <Label>Age</Label>
                    <input
                        type='text'
                        placeholder='Edit Age'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <SaveButton type='submit'>
                    <SaveIcon/>
                </SaveButton>
            </Form>
        </Main>
    )
}