import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, JobItem } from 'Components'
import { Aside, List, Wrapper } from './styled'

const Jobs = ({ jobs, companies }) => (
  <Wrapper>
    <List>
      {jobs.map((job, index) => {
        const { companyId, ...props } = job
        const company = companies[companyId]
        return <JobItem key={props.path} company={company} {...props} />
      })}
    </List>

    <Aside>
      <Box
        title='Why nosuitjobs works?'
        text='We have a growing community of 200,000 designers, developers and technology professionals using Panda to keep them up to date. It’s a place where companies and talent connect.'
      >
        <Button>Post a job starting at 200$</Button>
      </Box>

      <Box />
    </Aside>
  </Wrapper>
)

Jobs.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object),
  store: PropTypes.arrayOf(PropTypes.object)
}

export default Jobs
