import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { StoriesPreview as StoriesPreviewComponent } from ".";

export default {
  title: "Stories/Components",
  component: StoriesPreviewComponent,
  args: {
    previewImage: {
      thumbnail:
        "https://lenta.servicecdn.ru/globalassets/stories/-2/.webp?preset=thumbnail",
      medium:
        "https://lenta.servicecdn.ru/globalassets/stories/-2/.webp?preset=medium",
      fullSize:
        "https://lenta.servicecdn.ru/globalassets/stories/-2/.webp?preset=fullsize",
      mediumLossy:
        "https://lenta.servicecdn.ru/globalassets/stories/-2/.webp?preset=mediumlossy",
    },
  },
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
  },
} as ComponentMeta<typeof StoriesPreviewComponent>;

const Template: ComponentStory<typeof StoriesPreviewComponent> = (args) => (
  <StoriesPreviewComponent {...args} />
);

export const StoriesPreview = Template.bind({});
