import { fn } from '@storybook/test';

import IconComponent from './IconComponent.vue';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Icon',
    component: IconComponent,
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
  };
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const light = {
    args: {
        icon: "paperplane",
        lightdark: "light"
    },
  }

  export const Dark = {
    args: {
        icon: "paperplane",
        lightdark: "dark"
    },
  }
  