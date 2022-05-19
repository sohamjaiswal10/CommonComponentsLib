import React from "react";
import { Navbar } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "fragments/Navbar",
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  search: {
    label: "",
    onChange: () => null,
  },
};
