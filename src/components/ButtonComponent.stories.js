import { fn } from '@storybook/test';

import ButtonComponent from './ButtonComponent.vue';
import IconComponent from './IconComponent.vue';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Button',
    component: ButtonComponent,
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
  };
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const Primary = {
    args: {
        type: 'primary',
        icon: "",
        lightdark: "dark",
        ghost: false,
        circular: false,
        short: true,
        default: "Primary",
    },
  }

  export const Secondary = {
    args: {
        type: 'secondary',
        icon: "",
        iconMode: "light",
        ghost: false,
        circular: false,
        short: true,
        default: "Secondary",
    },
  }

  export const Tertiary = {
    args: {
        type: 'tertiary',
        icon: "",
        iconMode: "light",
        ghost: false,
        circular: false,
        short: true,
        default: "Tertiary",
    },
  }
  