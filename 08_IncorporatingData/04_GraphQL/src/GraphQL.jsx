import { useState, useEffect } from "react";
import { GraphQLClient } from "graphql-request";

function GraphQL() {
  const [login, setLogin] = useState("hyew-kim");
  const [userData, setUserData] = useState();

  useEffect(() => {
    const TOKEN = "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";
    const query = `query findRepos($login: String!) { 
        user(login: $login){
        id
        login
        name
        location
        avatar_url:avatarUrl
        repositories(first: 100){
          totalCount
          nodes{
            name
          }
            }
      }
    }`;

    const client = new GraphQLClient("https://api.github.com/graphql", {
      headers: { Authorization: "Bearer " + TOKEN },
    });

    client
      .request(query, { login })
      .then((results) => JSON.stringify(results, null, 2))
      .then(setUserData)
      .catch(console.error);
  }, []);
  console.log(userData);
  return <p>!</p>;
}

export default GraphQL;
