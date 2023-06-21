/**
 * @generated SignedSource<<b5b896b71762bc680950268c91d7872f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StoryFragment$data = {
  readonly createdAt: string;
  readonly poster: {
    readonly " $fragmentSpreads": FragmentRefs<"PosterBylineFragment">;
  };
  readonly summary: string | null;
  readonly thumbnail: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
  } | null;
  readonly title: string;
  readonly " $fragmentSpreads": FragmentRefs<"StoryCommentsComposerFragment" | "StoryCommentsSectionFragment" | "StoryLikeButtonFragment">;
  readonly " $fragmentType": "StoryFragment";
};
export type StoryFragment$key = {
  readonly " $data"?: StoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StoryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "poster",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PosterBylineFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "thumbnail",
      "plural": false,
      "selections": [
        {
          "args": [
            {
              "kind": "Literal",
              "name": "width",
              "value": 400
            }
          ],
          "kind": "FragmentSpread",
          "name": "ImageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StoryCommentsSectionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StoryLikeButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StoryCommentsComposerFragment"
    }
  ],
  "type": "Story",
  "abstractKey": null
};

(node as any).hash = "058f730918b7e89233e60f96fa232101";

export default node;
