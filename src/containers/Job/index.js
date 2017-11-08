import React from 'react'
import { Content, Wrapper } from './styled'
import * as Sections from './sections'
import Aside from './aside'

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

      <Aside />
    </Wrapper>
  )
}

export default Job
