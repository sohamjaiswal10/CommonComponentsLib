import React from "react";
import { EditProfileForm } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "forms/EditProfileForm",
  component: EditProfileForm,
  argTypes: {},
} as Meta<typeof EditProfileForm>;

const Template: ComponentStory<typeof EditProfileForm> = (args) => (
  <EditProfileForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  avatar:
    "https://i.pinimg.com/originals/85/8f/23/858f234a6612c8857555da78cc4b235a.jpg",
  banner:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3yZo3tCmqcMOtyrtTBoThd7DHuutUCILQ0Q&usqp=CAU",
  nickname: "Rimuru",
  username: "slime",
  about:
    "Rimuru Tempest (リムル゠テンペスト, Rimuru Tenpesuto), formerly known as Satoru Mikami, is the main protagonist of That Time I Got Reincarnated as a Slime. Partner and best friend of the True Dragon Veldora Tempest, Rimuru is the founder and King of the Jura Tempest Federation in Jura Forest.",
  tagline: "lol",
};
