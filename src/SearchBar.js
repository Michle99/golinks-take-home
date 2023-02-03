import React, {useState} from "react";
import axios from "axios";
import Result from './Result';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [gitHubRepos, setGitHubRepos] = useState(null);

    const handleChange = (e)  => {
        setSearchInput(e.target.value);
    };

    const handleClick = async () => {
        try {
            const gitHubRepos = await axios.get(`https://api.github.com/orgs/${searchInput}/repos`);
            setGitHubRepos(gitHubRepos);
            console.log('gitHubRepos', gitHubRepos);
        }
        catch(err){
            console.log(err);
        }
    };

    return (
        <div>
          <div className="github">
            <h1> Organization Repositories</h1>
             <input className="input" type="text" 
                placeholder="Search"  
                value={searchInput} 
                onChange={handleChange}
             />
            <button onClick={handleClick}>Search</button>
        </div>
        <Result 
            repos={gitHubRepos}
            input={searchInput}
        />
        </div>
    );
}

export default SearchBar;

