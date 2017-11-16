import React from 'react'
import { Content, Wrapper } from './styled'
import * as Sections from './sections'
import Aside from './aside'

const Job = ({ data }) => {
  const {
    workProfile,
    benefits,
    recruitingSteps,
    requirements,
    teamDistribution,
    technologies,
    workMethodology
  } = data

  return (
    <Wrapper>
      <Content>
        <Sections.Header {...data} />
        <Sections.Requirements data={requirements} />
        <Sections.Culture {...data} />
        <Sections.WorkMethodology data={workMethodology} />
        <Sections.Benefits data={benefits} />
        <Sections.WorkProfile data={workProfile} />
        <Sections.Recruiting steps={recruitingSteps} />
        <Sections.Technologies data={technologies} />
        <Sections.TeamDistribution data={teamDistribution} />
      </Content>

      <Aside {...data} />
    </Wrapper>
  )
}

export default Job
