import { fn } from '@storybook/test';

import ProductCardComponent from './ProductCardComponent.vue';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Product Card',
    component: ProductCardComponent,
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
  };
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const Primary = {
    args: {
        product: {    
        "id": 0,
        "headline": "Headline",
        "sellerId": 0,
        "price": 6000,
        "imagePath": "/images/imac_1.webp"
    }
    },
  };
  