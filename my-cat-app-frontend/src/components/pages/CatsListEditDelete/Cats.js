import {useState, useEffect} from "react";
import styled from "styled-components";
import {Title} from "../../reusable/Title";
import {Breakpoints} from "../../reusable/Breakpoints";
import {yellow} from "../../reusable/colors";
import {DeleteCat} from "./DeleteCat";
import {EditCatButton} from "./EditCatButton";

const Main = styled.main`
  padding: 0rem 2rem;
  ${Breakpoints.laptop} {
    padding: 0rem 3rem;
  }
`
const Container = styled.div`
  font-size: 0.8rem;
  color: ${yellow};
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  align-content: space-around;
  ${Breakpoints.laptop} {
    font-size: 1rem;
    gap: 3rem;
  }
`
const Column = styled.div`
  flex: 1; 
`


export const Cats = () => {
    const [cats, setCats] = useState([])
    const fetchCats = async () => {
        const response = await fetch(
            'http://localhost:8000/cats',
        );
        const data = await response.json();
        setCats(data.cats);
    }
    useEffect(() => {
        fetchCats();
    }, []);

    return (
        <Main>
            <Title number='03' title='Cat community'/>
            <Container>
                <Column>Cat id</Column>
                <Column>Cat name</Column>
                <Column>Cat age</Column>
                <Column>Edit Cat</Column>
                <Column>Delete Cat</Column>
            </Container>
            {cats && cats.map(cat => (
                <Container key={cat.id}>
                    <Column>{cat.id}</Column>
                    <Column>{cat.name}</Column>
                    <Column>{cat.age}</Column>
                    <Column>
                        <EditCatButton id={cat.id}/>
                    </Column>
                    <Column>
                        <DeleteCat reFetchCats={fetchCats} id={cat.id}/>
                    </Column>
                </Container>
            ))}
        </Main>
    )
}