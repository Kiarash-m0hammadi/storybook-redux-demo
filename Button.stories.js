import React from "react";
import Button from "./Button";

export default {
  title: "Example/Button", // Title for your component
  component: Button, // Component to be showcased
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  backgroundColor: "#6c757d",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  backgroundColor: "#007bff",
};
