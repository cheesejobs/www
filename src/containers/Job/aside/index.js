import React from 'react'
import { Box, Button, List, ListItem, ListText, ListIcon } from 'Components'
import { Aside, Share } from './styled'

const mapIcon = {
  salary: 'euro'
}

const getSpecIcon = id => mapIcon[id] || id

const getSpecs = ({ specs, company }) =>
  specs.concat([
    { id: 'team_medium', description: `${company.size} Employees` }
  ])

const CustomListItem = ListItem.extend`
  margin-bottom: 14px;
`
const CustomListText = ListText.extend`
  font-size: 14px;
`

const renderSpec = ({ id, description }) => (
  <CustomListItem key={id}>
    <ListIcon value={getSpecIcon(id)} />
    <CustomListText fontSize={'12px'}>{description}</CustomListText>
  </CustomListItem>
)

export default props => {
  return (
    <Aside>
      <Button large>Apply</Button>
      <Box title='About'>
        <List>{getSpecs(props).map(renderSpec)}</List>
      </Box>
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
}
