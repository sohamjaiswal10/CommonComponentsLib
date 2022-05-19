import React from "react";
import { SignUpForm } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "forms/SignUpForm",
  component: SignUpForm,
  argTypes: {},
} as Meta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => <SignUpForm />;

export const Default = () => <SignUpForm />;
