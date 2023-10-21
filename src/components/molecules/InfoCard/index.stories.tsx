import { StoryFn, Meta } from "@storybook/react";
import theme from "../../../themes";
import InfoCard from ".";

export default {
  title: "Molecules/InfoCard",
  component: InfoCard,
} as Meta<typeof InfoCard>;

const Template: StoryFn<typeof InfoCard> = (args) => (
  <InfoCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  
};
