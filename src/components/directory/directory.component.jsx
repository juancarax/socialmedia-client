import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Post from "../post/post.component";
import { DirectoryContainer } from "./directory.styles";
import Loading from "../loading/loading.component";
import { GET_POSTS } from "../../gql/querys";

const Directory = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading)
    return (
      <DirectoryContainer>
        <Loading />
      </DirectoryContainer>
    );
  if (error) return `Error! ${error.message}`;
  return (
    <DirectoryContainer>
      {data.getPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
