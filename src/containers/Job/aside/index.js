import React from 'react'
import { Box, Button, List, ListItem, ListText, ListIcon } from 'Components'
import { Aside, Share } from './styled'
import styled from 'styled-components'

const mapIcon = {
  salary: 'euro'
}

const getSpecIcon = id => mapIcon[id] || id

const getSpecs = ({ specs, company }) =>
  specs.concat([
    { id: 'team_medium', description: `${company.size} Employees` }
  ])

const ListSpectItem = ListItem.extend`
  margin-bottom: 14px;
`
const CustomListText = ListText.extend`
  font-size: 14px;
`

const ListSocial = List.extend`
  display: flex;
  justify-content: space-around;
  padding: 0 1rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`

const ListSocialItem = ListItem.extend`
  display: inline;
  margin-bottom: 0;
`

const ListSocialIcon = ListIcon.extend`
  width: 20px;
  height: 20px;
`

const ListSocialIconLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const renderSpec = ({ id, description }) => (
  <ListSpectItem key={id}>
    <ListIcon value={getSpecIcon(id)} />
    <CustomListText fontSize={'12px'}>{description}</CustomListText>
  </ListSpectItem>
)

const renderSocial = ({ id, url }) => (
  <ListSocialItem key={id}>
    <ListSocialIconLink target='_blank' href={url}>
      <ListSocialIcon value={getSpecIcon(id)} />
    </ListSocialIconLink>
  </ListSocialItem>
)

export default props => {
  return (
    <Aside>
      <Button large>Apply</Button>
      <Box title='About'>
        <List>{getSpecs(props).map(renderSpec)}</List>
        <ListSocial>{props.company.social.map(renderSocial)}</ListSocial>
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
