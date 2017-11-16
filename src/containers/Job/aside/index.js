import React from 'react'
import {
  Box,
  Button,
  List,
  ListItem,
  ListText,
  ListIcon,
  Link
} from 'Components'
import { Aside } from './styled'
import styled from 'styled-components'
import Sticky from 'react-stickynode'
import { getUrlDomain } from 'Helpers'

const mapIcon = {
  salary: 'euro'
}

const renderCompanyUrl = ({ url }) => (
  <Link external to={url} style='secondary'>
    {getUrlDomain(url)}
  </Link>
)

const getSpecIcon = id => mapIcon[id] || id

const getSpecs = ({ specs, company }) =>
  [
    { id: 'founded', description: `Founded at ${company.founded}` },
    { id: 'team_medium', description: `${company.size} Employees` }
  ]
    .concat(specs)
    .concat([{ id: 'earth', description: renderCompanyUrl(company) }])

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
  width: 18px;
  height: 18px;
`

const ListSocialIconLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const WebsiteImagePreview = styled.img`
  width: 100%;
`

const renderWebsitePreview = url => (
  <WebsiteImagePreview
    src={`https://api.microlink.io?url=${url}&screenshot&embed=screenshot.url`}
  />
)

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
    <Sticky enabled top={23}>
      <Aside>
        <Button large>Apply</Button>
        {props.company && renderWebsitePreview(props.company.url)}
        <Box title='About Us'>
          <List>{getSpecs(props).map(renderSpec)}</List>
          <ListSocial>{props.company.social.map(renderSocial)}</ListSocial>
        </Box>
      </Aside>
    </Sticky>
  )
}
