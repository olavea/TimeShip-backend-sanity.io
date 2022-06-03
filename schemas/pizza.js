import { GiParrotHead as icon } from 'react-icons/gi';

export default {
  // Computer Name
  name: 'pizza',
  // visible title
  title: 'Pirate Parrot Photos by Lillian (7 🏴‍☠️👸) ',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Photo Name',
      type: 'string',
      description: 'Name of the Pirate Parrot Photo',
    },
    {
      name: 'toppings',
      title: 'Tags and Tools of Pirate Princess Lillian (6 🏴‍☠️👸)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
    {
      name: 'image',
      title: 'Photo 🖼️',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price 💸',
      type: 'number',
      description: 'Price in cents for the use of this photo',
      validation: (Rule) => Rule.min(3333).max(99999),
      // TODO: Add custom input component
      // $33
    },
    {
      name: 'slug',
      title: 'Slug 🐛',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
  ],
};
