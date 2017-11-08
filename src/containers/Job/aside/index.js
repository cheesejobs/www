import React from 'react'
import { Box, Button } from 'Components'
import { Aside, Share } from './styled'

export default () => (
  <Aside>
    <Button large>Apply</Button>
    <Box title='Share this offer'>
      <Share>
        <a href='/'>Tell a friend</a>
        <a href='/'>Tweet this job</a>
        <a href='/'>Post on LinkedIn</a>
      </Share>
    </Box>
    <Box
      title='Tip: Application Emails'
      text="We've noticed that people who include a brief description of themselves as well as their resume achieve better results than those who send a longer email when applying."
    />
  </Aside>
)
