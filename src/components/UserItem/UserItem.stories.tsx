import type { Meta, StoryObj } from "@storybook/react";

import UserItem from "./UserList";

const meta = {
  title: "UserItem",
  component: UserItem,
  tags: ["autodocs"],
} satisfies Meta<typeof UserItem>;

export default meta;

type Story = StoryObj<typeof UserItem>;

export const Default: Story = {
  args: { id: "1", name: "Alice" },
};

export const FetchData: Story = {
  loaders: [
    async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return { user: data };
    },
  ],
  render: (args, { loaded: { user } }) => (
    <UserItem {...args} id={user.id} name={user.name} />
  ),
};
