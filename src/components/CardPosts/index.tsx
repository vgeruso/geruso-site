import React, { useEffect, useState } from "react";
import { Container, ContainerPosts, HeadContainer, Post, Title } from "./styles";
import { graphql, useStaticQuery } from "gatsby";

const CardPosts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDevArticles(sort: {article: {published_timestamp: DESC}}) {
        nodes {
          article {
            id
            title
            url
            cover_image
            published_at(formatString: "MMM DD, YYYY")
          }
        }
      }
    }
  `);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('DATA::', data.allDevArticles.nodes);
    setPosts(data.allDevArticles.nodes);
  }, []);

  return (
    <Container>
        <HeadContainer>
          <Title>Meus Artigos no <a href="https://dev.to/vgeruso" target="__blank">Dev To</a></Title>
        </HeadContainer>
        <ContainerPosts>
          {posts.map((item: any) => (
            <Post key={item.article.id} href={item.article.url} target="__blank">
              <img src={item.article.cover_image} width={500} height={200}/>
              <p>{item.article.title}</p>
              <span>{item.article.published_at}</span>
            </Post>
          ))}
        </ContainerPosts>
    </Container>
  );
};

export default CardPosts;