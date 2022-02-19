import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchIcon from '@mui/icons-material/Search'

import Button from './index'

export default {
  title: 'Basics/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <SearchIcon />
    <span className="m-1">search</span>
  </Button>
)

export const Default = Template.bind({})
Default.args = {}

export const Danger = Template.bind({})
Danger.args = { color: 'danger' }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
