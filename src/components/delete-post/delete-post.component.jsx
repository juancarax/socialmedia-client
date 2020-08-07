import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import Loading from "../loading/loading.component";

const DeletePostButton = ({
  Mutation,
  id,
  Query,
  children,
  postId,
  styles,
}) => {
  const history = useHistory();
  const [deleteById, { loading, error }] = useMutation(Mutation, {
    update(cache, { data: { elementToBeDeleted } }) {
      const { toUpdate } = cache.readQuery({ query: Query });
      cache.writeQuery({
        query: Query,
        data: {
          toUpdate: toUpdate.filter((e) => e.id !== id),
        },
      });
    },
    onError(err) {
      console.log(err);
    },
  });
  if (error) return <p>Error</p>;
  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loading small="true" />
      </div>
    );

  return (
    <CustomButton
      onClick={() => {
        deleteById(
          postId
            ? { variables: { postId: postId, commentId: id } }
            : { variables: { postId: id } }
        );
        !postId && history.push("/");
      }}
      Delete
    >
      {children}
    </CustomButton>
  );
};

export default DeletePostButton;
