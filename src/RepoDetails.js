import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function RepoDetails(props)  {
    const [orgCommitsDetails, setOrgCommitDetails] = useState([]);

    let input = useParams();

    console.log("input: ", input);

    function parseDate(dateString) {
        const event = new Date(dateString);
        return `${event.getMonth()}/${event.getDate()}/${event.getFullYear()}`;
    }

    useEffect(()=> {
        axios.get(`https://api.github.com/repos/${input.input}/${input.reponame}/commits`)
            .then((response) => {
                setOrgCommitDetails(response.data);
            })
    }, [])

    return(
        <div>
            <h3>Commits Details page For Repository</h3>
            {/* <h4>User input is: {input.input}</h4>
            <h4>User input is: {input.reponame}</h4> */}
            <div class="col-sm-12 repo-info">
                {orgCommitsDetails.map((commit, index) => (
                    <div key={index} class="card">
                      <div>
                        <p>Commit Title: {commit.commit.message}</p>
                        <h5> Commit Username: {commit.author?.login || commit.commit.author.email}</h5>
                        <p>Commit Hash:  {commit.sha}</p>
                        <p>Date: {parseDate(commit.commit.author.date)}</p>
                     </div>
                    <br/>
                </div>
                ))}
                
            </div>
        </div>
    );
}
export default RepoDetails;