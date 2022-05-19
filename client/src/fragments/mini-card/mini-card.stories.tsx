import React from "react";
import { MiniCard } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "fragments/MiniCard",
  component: MiniCard,
  argTypes: {},
} as Meta<typeof MiniCard>;

const Template: ComponentStory<typeof MiniCard> = (args) => (
  <MiniCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  avatar: {
    image:
      "https://thicc.mywaifulist.moe/waifus/378/21ed3f61704ead7f7c9ed4fff0d0d3578e45f06ad160131e917fcb5442241101_thumb.jpg",
  },
  name: "itsuki",
  tagLine: "Aqua best girl",
};
