import React from "react";
import { LoginForm } from ".";
import { ComponentStory, Meta } from "@storybook/react";

export default {
  title: "forms/LoginForm",
  component: LoginForm,
  argTypes: {},
} as Meta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm />;

export const Default = () => <LoginForm />;
