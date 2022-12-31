import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import React from "react";

import { Header } from "./Header";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    // more on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
