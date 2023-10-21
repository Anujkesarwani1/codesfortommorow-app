import { StoryFn, Meta } from '@storybook/react'
import theme from '../../../themes'
import CardItem from '.'

export default {
  title: 'Molecules/CardItem',
  component: CardItem,
} as Meta<typeof CardItem>

const Template: StoryFn<typeof CardItem> = (args) => <CardItem {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Urna tempor aliquet maecenas aliquam risus maecenas ut morbi. Mi..',
  subtitle:
    'Non suscipit sagittis nunc, pharetra. Eget quam facilisi non nunc libero..',
  datetime: 'Mon, 21 Dec 2020 14:57 GMT',
}
