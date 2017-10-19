import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, JobItem } from '../index'
import { Aside, List, Wrapper } from './styled'

const JobList = ({ data }) => (
  <Wrapper>
    <List>{data.map(job => <JobItem key={job.id} {...job} />)}</List>

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

JobList.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.object),
  store: PropTypes.arrayOf(PropTypes.object)
}

export default JobList
