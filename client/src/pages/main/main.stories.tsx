import React, { ReactElement } from "react";
import { Main } from ".";
import { ComponentStory, Meta } from "@storybook/react";
import { ProfileCard } from "../../cards/profile-card";
import { IProfileCardProps } from "../../cards/profile-card/profile-card.types";
import { IMiniCardProps } from "../../fragments/mini-card/mini-card.types";
import { MiniCard } from "../../fragments/mini-card";
import { Grid } from "../../components/grid";

export default {
  title: "pages/Main",
  component: Main,
  argTypes: {},
} as Meta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

const dummyProfileCardData: IProfileCardProps = {
  avatar: {
    image:
      "https://i.pinimg.com/originals/85/8f/23/858f234a6612c8857555da78cc4b235a.jpg",
  },
  banner: {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3yZo3tCmqcMOtyrtTBoThd7DHuutUCILQ0Q&usqp=CAU",
  },
  details: {
    nickname: "Rimuru",
    username: "slime",
    about:
      "Rimuru Tempest (リムル゠テンペスト, Rimuru Tenpesuto), formerly known as Satoru Mikami, is the main protagonist of That Time I Got Reincarnated as a Slime. Partner and best friend of the True Dragon Veldora Tempest, Rimuru is the founder and King of the Jura Tempest Federation in Jura Forest.",
    tagline: "Slay evil",
  },
};

export const Default = Template.bind({});
Default.args = {
  search: "",
  setSearch: () => null,
  view: <ProfileCard {...dummyProfileCardData} />,
  setView: () => null,
};

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

export const GridView = Template.bind({});
GridView.args = {
  search: "",
  setSearch: () => null,
  view: <Grid elements={elements} />,
  setView: () => null,
};
