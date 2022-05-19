import React from "react";
import { ProfileDetails } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "fragments/ProfileDetails",
  component: ProfileDetails,
  argTypes: {},
} as Meta<typeof ProfileDetails>;

const Template: ComponentStory<typeof ProfileDetails> = (args) => (
  <ProfileDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  username: "itsuki",
  nickname: "itsuki",
  about:
    "Itsuki Nakano (中野 五月 Nakano Itsuki) is one of the tsundere characters in Gotoubun no Hanayome, along with her sister Nino Nakano. She is the fifth and youngest sister of the Nakano quintuplets and her love interest is Fuutarou Uesugi. She is serious and dilligent, yet also a glutton and crybaby.",
};
