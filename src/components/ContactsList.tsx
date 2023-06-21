import * as React from "react";
import { graphql } from "relay-runtime";
import { useRefetchableFragment } from "react-relay";
import type { ContactsListFragment$key } from "./__generated__/ContactsListFragment.graphql";
import Card from "./Card";
import ContactRow from "./ContactRow";
import SearchInput from "./SearchInput";

export type Props = {
  viewer: ContactsListFragment$key;
};

const ContactsListFragment = graphql`
  fragment ContactsListFragment on Viewer
  @refetchable(queryName: "ContactsListPaginationQuery")
  @argumentDefinitions(search: { type: "String", defaultValue: "" }) {
    contacts(search: $search) {
      id
      ...ContactRowFragment
    }
  }
`;

export default function ContactsList({ viewer }: Props) {
  const [data, refetch] = useRefetchableFragment(ContactsListFragment, viewer);
  const [searchString, setSearchString] = React.useState("");
  const [isPending, startTransition] = React.useTransition();

  const onSearchStringChange = (value: string) => {
    setSearchString(value);
    startTransition(() => {
      refetch({ search: value });
    });
  };
  return (
    <Card dim>
      <h3>Contacts</h3>
      <SearchInput
        isPending={isPending}
        value={searchString}
        onChange={onSearchStringChange}
      />
      {data.contacts.map((contact) => (
        <ContactRow key={contact.id} contact={contact} />
      ))}
    </Card>
  );
}
