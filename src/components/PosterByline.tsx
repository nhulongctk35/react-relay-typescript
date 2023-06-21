import * as React from "react";
import Image from "./Image";
import { graphql } from "relay-runtime";
import { useFragment, useQueryLoader } from "react-relay";
import { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";
import Hovercard from "./Hovercard";
import PosterDetailsHovercardContents, {
  PosterDetailsHovercardContentsQuery,
} from "./PosterDetailsHovercardContents";
import type { PosterDetailsHovercardContentsQuery as QueryType } from "./__generated__/PosterDetailsHovercardContentsQuery.graphql";

export type Props = {
  poster: PosterBylineFragment$key;
};

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    id
    name
    profilePicture {
      ...ImageFragment @arguments(width: 60, height: 60)
    }
  }
`;

export default function PosterByline({ poster }: Props): React.ReactElement {
  const data = useFragment(PosterBylineFragment, poster);
  const hoverRef = React.useRef(null);

  const [hovercardQueryRef, loadHovercardQuery] = useQueryLoader<QueryType>(
    PosterDetailsHovercardContentsQuery
  );

  return (
    <div className="byline" ref={hoverRef}>
      <Image
        image={data.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{data.name}</div>
      <Hovercard
        onBeginHover={() => loadHovercardQuery({ posterID: data.id })}
        targetRef={hoverRef}
      >
        <PosterDetailsHovercardContents queryRef={hovercardQueryRef} />
      </Hovercard>
    </div>
  );
}
