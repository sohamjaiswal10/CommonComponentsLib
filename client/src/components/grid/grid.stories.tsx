import React from "react";
import { Grid } from "./";
import { ComponentStory, Meta } from "@storybook/react";
import { IMiniCardProps } from "../../fragments/mini-card/mini-card.types";
import { MiniCard } from "../../fragments/mini-card";
import { ReactElement } from "react";

export default {
  title: "components/Grid",
  component: Grid,
  argTypes: {},
} as Meta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

const dummyMiniCardData: IMiniCardProps = {
  avatar: {
    image:
      "https://thicc.mywaifulist.moe/waifus/378/21ed3f61704ead7f7c9ed4fff0d0d3578e45f06ad160131e917fcb5442241101_thumb.jpg",
  },
  name: "itsuki",
  tagLine: "Aqua best girl",
};

const elements: ReactElement[] = [
  <MiniCard {...dummyMiniCardData} />,
  <MiniCard {...dummyMiniCardData} />,
  <MiniCard {...dummyMiniCardData} />,
  <MiniCard {...dummyMiniCardData} />,
  <MiniCard {...dummyMiniCardData} />,
  <MiniCard {...dummyMiniCardData} />,
  <MiniCard {...dummyMiniCardData} />,
  <MiniCard {...dummyMiniCardData} />,
  <MiniCard {...dummyMiniCardData} />,
  <MiniCard {...dummyMiniCardData} />,
];

export const Default = Template.bind({});
Default.args = {
  elements: elements,
};
