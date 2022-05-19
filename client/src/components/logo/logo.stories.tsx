import React from "react";
import { Logo } from ".";
import { ComponentStory, Meta } from "@storybook/react";
import { Typography } from "../typography";

export default {
  title: "components/Logo",
  component: Logo,
  argTypes: {},
} as Meta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "black",
};
