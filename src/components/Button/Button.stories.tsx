import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    actions: {
      argTypesRegex: "^handle[A-Z].*",
    },
  },
  argTypes: {
    color: {
      options: ["default", "primary", "danger"],
      control: {
        type: "radio",
      },
    },
    size: {
      options: ["base", "sm", "lg"],
      control: {
        type: "select",
      },
    },
    handleClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Default" },
};

// argsでもrender関数でも両方OK
export const Primary: Story = {
  render: (args) => <Button {...args}>{args.children}</Button>,
  args: { children: "Primary", color: "primary" },
};

export const Danger: Story = {
  args: { children: "Danger", color: "danger" },
};

export const PrimarySmall: Story = {
  args: { ...Primary.args, size: "sm" },
};

export const PrimaryLarge: Story = {
  args: { ...Primary.args, size: "lg" },
};
