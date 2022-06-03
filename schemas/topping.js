import { FaTape as icon } from 'react-icons/fa';

export default {
  // Computer Name
  name: 'topping',
  // visible title
  title: 'Tools of the Pirate Princess',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Tools & Tags of the Pirate Princess',
      type: 'string',
      description:
        'What is the name of the Tool or Tag or Supplies of the Pirate Princess Project',
    },
    {
      name: 'vegeterian',
      title: 'Safe Alone 😺',
      type: 'boolean',
      description:
        'Check the box if Pirate Princess Lillian (7 🏴‍☠️👸) safely used this Tool or Supply alone, without an older friend or without adult supervision.',
      options: {
        layout: 'checkbox',
      },
    },
    // {
    //   name: 'image',
    //   title: 'Image 🖼️',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    // {
    //   name: 'price',
    //   title: 'Price 💸',
    //   type: 'number',
    //   description: 'Price in cents of this Project for non-children',
    //   validation: (Rule) => Rule.min(333).max(99999),
    //   // TODO: Add custom input component
    // },
  ],
};
