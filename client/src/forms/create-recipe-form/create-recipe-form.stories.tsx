import React from "react";
import { CreateRecipeForm } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "forms/CreateRecipeForm",
  component: CreateRecipeForm,
  argTypes: {},
} as Meta<typeof CreateRecipeForm>;

const Template: ComponentStory<typeof CreateRecipeForm> = (args) => (
  <CreateRecipeForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  avatar:
    "https://i.pinimg.com/originals/85/8f/23/858f234a6612c8857555da78cc4b235a.jpg",
  nickname: "Rimuru",
  username: "slime",
};
