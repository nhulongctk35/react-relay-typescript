import * as React from "react";
import Story from "./Story";
import { graphql, useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { NewsfeedStoriesFragment$key } from "./__generated__/NewsfeedStoriesFragment.graphql";
import InfiniteScrollTrigger from "./InfiniteScrollTrigger";

const NewsfeedStoriesFragment = graphql`
  fragment NewsfeedStoriesFragment on Query
  @refetchable(queryName: "NewsfeedRefetchQuery")
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 3 }
    after: { type: "String", defaultValue: null }
  ) {
    viewer {
      newsfeedStories(first: $first, after: $after)
        @connection(key: "Newsfeed_newsfeedStories") {
        edges {
          node {
            id
            ...StoryFragment
          }
        }
      }
    }
  }
`;

const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    ...NewsfeedStoriesFragment
  }
`;

function NewsfeedStoryContent({
  query,
}: {
  query: NewsfeedStoriesFragment$key;
}) {
  const { data, loadNext, isLoadingNext, hasNext } = usePaginationFragment(
    NewsfeedStoriesFragment,
    query
  );

  const storyList = data.viewer.newsfeedStories.edges;

  function onEndReached() {
    loadNext(3);
  }

  return (
    <div className="newsfeed">
      {storyList.map((story) => (
        <Story key={story.node.id} story={story.node} />
      ))}
      <InfiniteScrollTrigger
        onEndReached={onEndReached}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
      />
    </div>
  );
}

export default function Newsfeed() {
  const queryData = useLazyLoadQuery(NewsfeedQuery, {});

  return <NewsfeedStoryContent query={queryData} />;
}
