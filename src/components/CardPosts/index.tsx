import React, { useEffect, useState } from "react";
import { Container, ContainerPosts, HeadContainer, Post, Title } from "./styles";
import { graphql, useStaticQuery } from "gatsby";

const CardPosts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allUndefined(sort: {published_at: DESC}) {
        nodes {
          id
          title
          url
          published_at(formatString: "MMM DD, YYYY")
          published
          cover_image
        }
      }
    }
  `);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('DATA::', data.allUndefined.nodes);
    setPosts(data.allUndefined.nodes);
  }, []);

  return (
    <Container>
        <HeadContainer>
          <Title>Meus Artigos no <a href="https://dev.to/vgeruso" target="__blank">Dev To</a></Title>
        </HeadContainer>
        <ContainerPosts>
          {posts.map((item: any) => {
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

export default CardPosts;