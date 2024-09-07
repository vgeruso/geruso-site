import React, { useEffect, useState } from "react";
import { Container, ContainerPosts, HeadContainer, Post, Title } from "./styles";
import { publicRepositories } from "../../service/ghService";

const CardContributions = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    await publicRepositories();
  };

  return (
    <Container>
        <HeadContainer>
          <Title>Minhas contribuições</Title>
        </HeadContainer>
        <ContainerPosts>
          {repos.map((item: any) => {
            if (item.published && item.title) {
              return (
                <Post key={item.id} href={item.url} target="__blank">
                  <img src={item.cover_image}/>
                  <p>{item.title}</p>
                  <span>{item.published_at}</span>
                </Post>
              )
            }  
          })}
        </ContainerPosts>
    </Container>
  );
};

export default CardContributions;