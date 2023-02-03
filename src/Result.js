import React  from "react";
import './App.css';
import { Link } from "react-router-dom";

const Result = (props) => {
   let repos = props.repos;
   let input = props.input

    console.log("Values from props[repos]: ", repos);
    console.log("Values from props[input]: ", input);


    function parseDate(dateString) {
        const event = new Date(dateString);
        return `${event.getMonth()}/${event.getDate()}/${event.getFullYear()}`;
    }

    const repoDetails = repos && repos.data.sort((a, b)=> (b.stargazers_count - a.stargazers_count)).map((repo, index) =>(
        <div key={index}>
            <div class="col-sm-12 repo-info">
              <div class="card" >
                <div class="repo-info-top">
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
                </div>
              </div>
            </div>
        </div>
    ))

    return (
        <div className="results">
            {repoDetails}
        </div>
    );
}

export default Result;
