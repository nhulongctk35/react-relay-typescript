import * as React from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { ImageFragment$key } from "./__generated__/ImageFragment.graphql";

type Props = {
  image: ImageFragment$key;
  width?: number;
  height?: number;
  className?: string;
};

const ImageFragment = graphql`
  fragment ImageFragment on Image
  @argumentDefinitions(
    width: { type: "Int", defaultValue: null }
    height: { type: "Int", defaultValue: null }
  ) {
    url(width: $width, height: $height)
    altText
  }
`;

export default function Image({
  image,
  width,
  height,
  className,
}: Props): React.ReactElement {
  const data = useFragment(ImageFragment, image);

  return (
    <img
      key={data.url}
      src={data.url}
      width={width}
      height={height}
      className={className}
      alt={data.altText}
    />
  );
}
