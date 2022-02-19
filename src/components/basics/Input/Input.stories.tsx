import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchIcon from '@mui/icons-material/Search'

import Input from './index'

export default {
  title: 'Basics/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}>
    <SearchIcon />
    <span className="m-1">search</span>
  </Input>
)

export const Default = Template.bind({})
Default.args = { label: 'default' }

export const Disabled = Template.bind({})
Disabled.args = { label: 'disabled', disabled: true }
