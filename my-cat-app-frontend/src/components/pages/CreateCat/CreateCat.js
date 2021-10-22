import {useState} from "react";
import {Title} from "../../reusable/Title";
import styled from "styled-components";
import {black, blue, yellow} from "../../reusable/colors";
import {Breakpoints} from "../../reusable/Breakpoints";
import {SaveIcon} from "./savebutton";

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

export const CreateCat = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!name && !age) {
            alert('Please add your cat information');
            return;
        } else if (!name) {
            alert('Please add the name of your cat');
            return;
        } else if (!age) {
            alert('Please add the age of your cat');
            return;
        }

        setName('');
        setAge('');

        try {
            const response = await fetch('http://localhost:8000/cats', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name, age})
            });
            const data = response.json();
            console.log(data);
        } catch (e) {
            console.log('got error')
            console.log(e)
        }
    }

    return (
        <Main>
            <Title number='02' title='Create your cat'/>
            <Form onSubmit={onSubmit}>
                <div>
                    <h1>Fill up the form</h1>
                    <Label>Name</Label>
                    <input
                        type='text'
                        placeholder='Add Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <Label>Age</Label>
                    <input
                        type='text'
                        placeholder='Add Age'
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
