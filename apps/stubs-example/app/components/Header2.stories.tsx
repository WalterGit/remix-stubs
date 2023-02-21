import type { Meta, StoryFn } from "@storybook/react";
import { Header2 } from "./Header2";

let story: Meta<typeof Header2> = {
  title: "Example/Header2",
  component: Header2,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default story;

const Template: StoryFn<typeof Header2> = (args) => <Header2 {...args} />;

export const LoggedIn: any = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut: any = Template.bind({});
LoggedOut.args = {};
