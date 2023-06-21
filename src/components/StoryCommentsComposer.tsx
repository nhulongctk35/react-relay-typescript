import * as React from "react";
import { graphql } from "relay-runtime";
import { useFragment, useMutation } from "react-relay";

import type { StoryCommentsComposerFragment$key } from "./__generated__/StoryCommentsComposerFragment.graphql";

const { useState } = React;

export type Props = {
  story: StoryCommentsComposerFragment$key;
};

const StoryCommentsComposerFragment = graphql`
  fragment StoryCommentsComposerFragment on Story {
    id
  }
`;

const StoryCommentsMutation = graphql`
  mutation StoryCommentsComposerMutation($id: ID!, $text: String!) {
    postStoryComment(id: $id, text: $text) {
      story {
        id
        ...StoryFragment
      }
    }
  }
`;

export default function StoryCommentsComposer({ story }: Props) {
  const data = useFragment(StoryCommentsComposerFragment, story);
  const [commit, isInFlight] = useMutation(StoryCommentsMutation);

  const [text, setText] = useState("");
  function onPost() {
    // TODO post the comment here
    commit({
      variables: {
        id: data.id,
        text,
      },

      onCompleted: (response, errors) => {
        console.log("Response received from server.", response, errors);
        setText("");
      },
    });
  }
  return (
    <div className="commentsComposer">
      <TextComposer text={text} onChange={setText} onReturn={onPost} />
      <PostButton disabled={isInFlight} onClick={onPost} />
    </div>
  );
}

function TextComposer({
  text,
  onChange,
  onReturn,
}: {
  text: string;
  onChange: (newValue: string) => void;
  onReturn: () => void;
}) {
  return (
    <input
      value={text}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          onReturn();
        }
      }}
    />
  );
}

interface PostButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

function PostButton({ onClick, ...rest }: PostButtonProps) {
  return (
    <button onClick={onClick} {...rest}>
      Post
    </button>
  );
}
