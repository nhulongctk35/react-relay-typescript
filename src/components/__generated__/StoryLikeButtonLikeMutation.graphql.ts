/**
 * @generated SignedSource<<baa1652037c7dbd3f7c354ca6f4fec67>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StoryLikeButtonLikeMutation$variables = {
  doesLike: boolean;
  id: string;
};
export type StoryLikeButtonLikeMutation$data = {
  readonly likeStory: {
    readonly story: {
      readonly " $fragmentSpreads": FragmentRefs<"StoryLikeButtonFragment">;
    } | null;
  } | null;
};
export type StoryLikeButtonLikeMutation = {
  response: StoryLikeButtonLikeMutation$data;
  variables: StoryLikeButtonLikeMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "doesLike"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "kind": "Variable",
    "name": "doesLike",
    "variableName": "doesLike"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "StoryLikeButtonLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "StoryMutationResponse",
        "kind": "LinkedField",
        "name": "likeStory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Story",
            "kind": "LinkedField",
            "name": "story",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "StoryLikeButtonFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "StoryLikeButtonLikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "StoryMutationResponse",
        "kind": "LinkedField",
        "name": "likeStory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Story",
            "kind": "LinkedField",
            "name": "story",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "likeCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "doesViewerLike",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c47d2d866e3e2c78d6494fc26791476a",
    "id": null,
    "metadata": {},
    "name": "StoryLikeButtonLikeMutation",
    "operationKind": "mutation",
    "text": "mutation StoryLikeButtonLikeMutation(\n  $id: ID!\n  $doesLike: Boolean!\n) {\n  likeStory(id: $id, doesLike: $doesLike) {\n    story {\n      ...StoryLikeButtonFragment\n      id\n    }\n  }\n}\n\nfragment StoryLikeButtonFragment on Story {\n  id\n  likeCount\n  doesViewerLike\n}\n"
  }
};
})();

(node as any).hash = "395f1178234586ee9234eb2557ad6e7e";

export default node;
