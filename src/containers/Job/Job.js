import React from 'react'
import { Box, Button } from 'Components'
import { Aside, Content, Share, Wrapper } from './styled'
import * as Sections from './sections'

const Job = ({ data }) => {
  const {
    equipment,
    workProfile,
    benefits,
    recruitingSteps,
    requirements,
    specs,
    teamDistribution,
    technologies,
    workMethodology
  } = data

  return (
    <Wrapper>
      <Content>
        <Sections.Header {...data} />
        <Sections.Specs data={specs} />
        <Sections.Requirements data={requirements} />
        <Sections.WorkMethodology data={workMethodology} />
        <Sections.Benefits data={benefits} />
        <Sections.WorkProfile data={workProfile} />
        <Sections.Recruiting steps={recruitingSteps} />
        <Sections.Technologies data={technologies} />
        <Sections.Equipment {...equipment} />
        <Sections.TeamDistribution data={teamDistribution} />
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
