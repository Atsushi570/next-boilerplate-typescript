import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuItem } from '@mui/material'
import Select from './index'

export default {
  title: 'Basics/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  const options = [
    { text: 'None', value: 'none' },
    { text: 'Ten', value: '10' },
    { text: 'Twenty', value: '20' },
    { text: 'Thirty', value: '30' },
  ]
  return (
    <Select style={{ width: '200px' }} {...args}>
      {options.map((age) => (
        <MenuItem key={age.text} value={age.value}>
          {age.text}
        </MenuItem>
      ))}
    </Select>
  )
}

export const Default = Template.bind({})
Default.args = { label: 'default' }

export const Disabled = Template.bind({})
Disabled.args = { label: 'disabled', disabled: true }
