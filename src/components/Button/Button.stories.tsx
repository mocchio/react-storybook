import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Common/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const HelloButton: Story = {
  render: () => <Button>Hello World</Button>,
};

// argsでもrender関数でも両方OK
export const ClickButton: Story = {
  args: { children: "click" },
};
