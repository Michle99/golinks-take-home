import React  from "react";
import './App.css';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  background: #e8bebe;
  display: flex;
  justify-content: center; // 1
  flex-flow: column wrap; // 2
  width: 100%;
  height: 100%;
`;
const List = styled.div`
  display: flex;
  justify-content: center; // 3
  flex-flow: row wrap; // 4
`;

const Card = styled.div`
  margin: 20px;
  background: #fff;
  height: 400px;
  width: 400px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-flow: column; // 5 
  justify-content: center;
  align-items: center;
`;



const Result = (props) => {
   let repos = props.repos;
   let input = props.input

    console.log("Values from props[repos]: ", repos);
    console.log("Values from props[input]: ", input);


    function parseDate(dateString) {
        const event = new Date(dateString);
        return `${event.getMonth()}/${event.getDate()}/${event.getFullYear()}`;
    }


    return (
        <Container>
            <List>
                {repos && repos.data.sort((a, b)=>(b.stargazers_count - b.stargazers_count)).map((repo, index) =>(
                    <Card key={index}>
                      <h3>
                        <Link to={`/repos/${input}/${repo.name}/commits`}  
                            state={{ name: repo.name, input }}
                        >
                            Repo Name: {repo.name}
                        </Link>
                      </h3>
                      <p>Description: {repo.description}</p>
                      <p>Star Count: {repo.stargazers_count}</p>
                      <p>Forks Count: {repo.forks_count}</p>
                      <p>Date Created: {parseDate(repo.updated_at)}</p>
                    </Card>
                ))
                }     
            </List>
        </Container>
    );

    const repoDetails = repos && repos.data.sort((a, b)=> (b.stargazers_count - a.stargazers_count)).map((repo, index) =>(
        <div key={index}>
            <div class="col-sm-12 repo-info">
              <div class="card" >
                <div class="repo-info-top">
                
                </div>
              </div>
            </div>
        </div>
    ))
    // <div className="results">
    //         {repoDetails}
    //     </div>

    
}

export default Result;
