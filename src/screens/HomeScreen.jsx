import React from 'react'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import SideBar from '../components/SideBar'
import PropTypes from 'prop-types'
import SideMenu from '../components/SideMenu'
import { Paper } from '@material-ui/core'

const HomeScreen = ({ summary, menu }) => {
  return (
        <MDBContainer fluid={true} style={{ paddingTop: '75px' }}>
            <MDBRow>
                <MDBCol className={'mr-3'} style={{
                  display: summary ? 'none' : 'block',
                  maxWidth: '250px'
                }}>
                    <SideBar/>
                </MDBCol>
                <MDBCol className={'mx-auto'}>
                    <Paper style={{ width: '100%', height: '100vh' }}>

                    </Paper>
                </MDBCol>
                <MDBCol className={'pl-1'} style={{
                  display: menu ? 'none' : 'block',
                  maxWidth: '250px'
                }}
                >
                    <SideMenu/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
  )
}
HomeScreen.propTypes = {
  summary: PropTypes.bool,
  menu: PropTypes.bool
}
export default HomeScreen
