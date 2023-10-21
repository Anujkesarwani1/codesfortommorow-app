import { StoryFn, Meta } from '@storybook/react'
import theme from '../../../themes'
import ListItem from '.'

export default {
  title: 'Molecules/ListItem',
  component: ListItem,
} as Meta<typeof ListItem>

const Template: StoryFn<typeof ListItem> = (args) => <ListItem {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Urna tempor aliquet maecenas aliquam risus maecenas ut morbi. Mi..',
  subtitle:
    'Non suscipit sagittis nunc, pharetra. Eget quam facilisi non nunc libero..',
  datetime: 'Mon, 21 Dec 2020 14:57 GMT',
}
