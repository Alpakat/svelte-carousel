import DotView from './DotView.svelte';

export default {
  title: 'Dot',
  component: DotView
};

const Template = ({ ...args }) => ({
  Component: DotView,
  props: args
});

export const Primary = Template.bind({});
