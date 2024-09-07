import React from "react";
import Button from "./Button";

// Default export that defines the component's metadata for Storybook
export default {
  title: "Example/Button", // Title of the story in Storybook UI
  component: Button, // Component to be rendered
};

// Template for creating component instances
const Template = (args) => <Button {...args} />;

// "Primary" story for Button
export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  backgroundColor: "#007bff",
};

// "Secondary" story for Button
export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  backgroundColor: "#6c757d",
};
