import Form from "./components/Form";
import Banner from "./components/Banner";
import { useState } from "react";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Sciense",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FA95F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];
  const [collaborators, setCollaborators] = useState([]);

  const handleToRegisterCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const loadingTeams = () => {
    return teams.map((team) => (
      <Team
        key={team.name}
        name={team.name}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor}
        collaborators={collaborators.filter(
          (collaborator) => collaborator.team === team.name
        )}
      />
    ));
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        registerCollaborator={(collaborator) =>
          handleToRegisterCollaborator(collaborator)
        }
      />
      {loadingTeams()}
    </div>
  );
}

export default App;
