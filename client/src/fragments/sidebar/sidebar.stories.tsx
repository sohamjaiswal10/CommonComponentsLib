import React from "react";
import { Sidebar } from "./";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "fragments/Sidebar",
  component: Sidebar,
  argTypes: {},
} as Meta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      label: "lol",
      link: "/lmfao",
    },
    {
      label: "lol",
      link: "/lmfao",
    },
    {
      label: "lol",
      link: "/lmfao",
    },
    {
      label: "lol",
      link: "/lmfao",
    },
  ],
};
