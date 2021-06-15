import React from 'react';
import Product from './index';
import Radio from '../../assets/images/radio.jpg';


export default {
  title: 'Element/Product',
  component: Product
};

const Template = (args) => <Product {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Radio',
  image: Radio,
  description: 'Explicabo veniam nesciunt ex sint cum eum voluptatem, placeat necessitatibus vitae exercitationem quas rem dicta optio.'
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: null
};
