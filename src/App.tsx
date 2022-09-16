import "./App.css";
import axios from "axios";
import {useState} from "react";
type GITHUBResponse = {
  name: string;
  bio: string;
  id: string;
  avatar_url: string;
}

function App() {
  const [search, setSearch] = useState("Aguardando...");
  const [name, setName] = useState("Aguardando...");
  const [bio, setBio] = useState("Aguardando...");
  const [avatarURL, setAvatarURL] = useState("Aguardando...");
  const [ID, setID] = useState("Aguardando...");

  const handleSearch = () =>{

    axios.get<GITHUBResponse>(`https://api.github.com/users/${search}`).then((res) =>{
      setName(res.data.name);
      setBio(res.data.bio);
      setAvatarURL(res.data.avatar_url);
      setID(res.data.id);
    });
  }
  return (
    <div className="container-app">
      <div className="container">
        <header className="header-top">
          <ul>
            <li>Search Git Profile</li>
          </ul>
        </header>
        <main>
          <div className="form">
            <h1>Search: </h1>
            <input type="text" placeholder="Enter a username..." onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="content">
            <div>
              <img src={avatarURL} alt="Profile Picture" />
              <h1>{name}</h1>
              <p>ID: {ID}</p>
              <p>{bio}</p>
            </div>
          </div>
        </main>
      </div> 
    </div>
  );
}

export default App;
