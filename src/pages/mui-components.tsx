import { NextPage } from 'next'
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import SearchIcon from '@mui/icons-material/Search'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Card, InputLabel, MenuItem, SelectChangeEvent } from '@mui/material'
import { Button } from '@/components/basics/Button'
import { Input } from '@/components/basics/Input'
import { Select } from '@/components/basics/Select'

export const MuiComponents: NextPage = () => {
  // Input
  const [phone, setPhone] = useState('')
  const onPhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

  // Select
  const [age, setAge] = useState('none')
  const ages = [
    { text: 'None', value: 'none' },
    { text: 'Ten', value: '10' },
    { text: 'Twenty', value: '20' },
    { text: 'Thirty', value: '30' },
  ]
  const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)

  return (
    <div className="m-8">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <p>Buttons</p>
        </AccordionSummary>
        <div className="m-2">
          <Button className="mx-2 " variant="contained">
            <SearchIcon />
            <span>search</span>
          </Button>
          <Button className="mx-2" variant="outlined">
            <SearchIcon />
            <span>search</span>
          </Button>
          <Button className="mx-2 bg-orange-200 text-black" variant="contained">
            <SearchIcon />
            <span>search</span>
          </Button>
          <Button className="mx-2" disabled={true}>
            <SearchIcon />
            <span>search</span>
          </Button>
        </div>
      </Accordion>

      <Card className="mt-4">
        <div className="m-2">
          <Input className="mr-2" label="phone" value={phone} onInput={onPhoneInput} size="small" />
          <Input className="mr-2" label="disabled" size="small" disabled={true} />
          <p>input: {phone}</p>
        </div>
      </Card>

      <Card className="mt-4">
        <div className="m-2">
          <Select
            className="mr-2 w-1/4"
            label="Age"
            size="small"
            value={age}
            onChange={onAgeChange}
          >
            {ages.map((age) => (
              <MenuItem key={age.text} value={age.value}>
                {age.text}
              </MenuItem>
            ))}
          </Select>
          <p>input: {age}</p>
        </div>
      </Card>
    </div>
  )
}

export default MuiComponents
