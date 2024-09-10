import React, { useEffect, useState } from "react";
import { Container, ContainerPosts, HeadContainer, Post, Title } from "./styles";
import { graphql, useStaticQuery } from "gatsby";

const CardContributions = () => {
  const data = useStaticQuery(graphql`
    query Github {
      github {
        user(login: "vgeruso") {
          repositories(
            visibility: PUBLIC
            orderBy: {field: PUSHED_AT, direction: DESC}
            first: 5
            isFork: false
          ) {
            edges {
              node {
                id
                name
                stargazerCount
                description
                languages(first: 1) {
                  edges {
                    node {
                      name
                      color
                    }
                  }
                }
                url
              }
            }
          }
        }
      }
    }
  `);

  const [repos, setRepos] = useState<any[]>([]);
  
  useEffect(() => {
    const repositories = data.github.user.repositories.edges;
    const reposRecents: any[] = [];

    for(const repo of repositories) {
      reposRecents.push(repo.node);
    }
    
    setRepos(reposRecents);
  }, []);

  return (
    <Container>
        <HeadContainer>
          <Title>Minhas contribuições para a comunidade dev</Title>
        </HeadContainer>
        <ContainerPosts>
          {repos.map((item: any) => (
            <Post key={item.id} href={item.url} target="__blank">
              <p>{item.name}</p>
              <p>{item.stargazerCount}</p>
              {item.languages.edges.length > 0 ? (
                <p>{item.languages.edges[0].node.name}</p>
              ):(
                <p>none</p>
              )}
            </Post>
          ))}
        </ContainerPosts>
    </Container>
  );
};

export default CardContributions;