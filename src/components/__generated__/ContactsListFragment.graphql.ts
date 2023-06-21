/**
 * @generated SignedSource<<7f47bee4feee07fc36da0e83d6fa1924>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContactsListFragment$data = {
  readonly contacts: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContactRowFragment">;
  } | null> | null;
  readonly " $fragmentType": "ContactsListFragment";
};
export type ContactsListFragment$key = {
  readonly " $data"?: ContactsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContactsListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "search"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "viewer"
      ],
      "operation": require('./ContactsListPaginationQuery.graphql')
    }
  },
  "name": "ContactsListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "contacts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContactRowFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node as any).hash = "f5ffbe753a6dc3b16183c3c88726fee6";

export default node;
