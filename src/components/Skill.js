import React from 'react'
import { MDBCol, MDBRow } from 'mdbreact'
import { Typography } from '@material-ui/core'
import { Line } from 'rc-progress'
import PropTypes from 'prop-types'

const Skill = ({ title, value }) => {
  return (
        <div className={'m-1'}>
            <MDBRow>
                <MDBCol>
                    <Typography className={'mr-auto'}>{title}</Typography>
                </MDBCol>
                <MDBCol>
                    <Typography className={'float-right'}>{value}</Typography>
                </MDBCol>
            </MDBRow>
            <Line percent={'95'} strokeWidth={'1'} strokeColor={'#9C4B04'}/>
        </div>
  )
}
Skill.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
}
export default Skill
