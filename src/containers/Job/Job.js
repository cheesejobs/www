import React from 'react'
import { Box, Button } from 'Components'
import { Aside, Content, Share, Wrapper } from './styled'
import * as Sections from './sections'

const Job = ({ data }) => {
  const {
    equipment,
    essentials,
    workProfile,
    benefits,
    location,
    recruitingSteps,
    requirements,
    salary,
    specs,
    teamDistribution,
    technologies,
    workMethodology
  } = data

  return (
    <Wrapper>
      <Content>
        <Sections.Header {...data} />
        <Sections.About salary={salary} location={location} />
        <Sections.TeamDistribution data={teamDistribution} />
        <Sections.WorkMethodology data={workMethodology} />
        <Sections.Specs {...specs} />
        <Sections.WorkProfile data={workProfile} />
        <Sections.Equipment {...equipment} />
        <Sections.Technologies data={technologies} />
        <Sections.Benefits data={benefits} />
        <Sections.Requirements data={requirements} />
        <Sections.Recruiting steps={recruitingSteps} />
      </Content>

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
    </Wrapper>
  )
}

export default Job
