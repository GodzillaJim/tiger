import React from 'react'
import { Button, Card, Divider, IconButton, Typography } from '@material-ui/core'
import { MDBCardBody, MDBCardImage, MDBCol, MDBRow } from 'mdbreact'
import Passport from '../images/passport.png'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Skill from './Skill'
import { Assignment, GitHub, LinkedIn, Twitter } from '@material-ui/icons'
import Socials from './Socials'

const SideBar = () => {
  return (
        <div style={{ width: '250px' }}>
            <Card className={'p-2'}>
                <MDBCardImage style={{ width: '100px' }} src={Passport}
                              alt={'Jimna passport image'}
                              cascade={true} zoom={true}
                              className={'img-fluid mx-auto rounded-circle'}
                              waves/>
                <MDBCardBody className={'text-center'}>
                    <Typography variant={'h5'}>Jimna Njoroge</Typography>
                    <Typography variant={'body1'}>Java Developer</Typography>
                </MDBCardBody>
            </Card>
            <Divider/>
            <Card>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol className={'text-center'}>
                            <div className={'row'}
                                 style={{ width: 50, height: 50 }}>
                                <CircularProgressbar styles={buildStyles({
                                  pathColor: '#9C4B04',
                                  textColor: 'black'
                                })} value={100} text={'100%'}/>
                            </div>
                            <div className={'row'}>
                                <Typography component={'span'}
                                            className={'text-center'}>English</Typography>
                            </div>
                        </MDBCol>
                        <MDBCol className={'text-center'}>
                            <div className={'row'}
                                 style={{ width: 50, height: 50 }}>
                                <CircularProgressbar value={95}
                                                     styles={buildStyles({
                                                       pathColor: '#9C4B04',
                                                       textColor: 'black'
                                                     })} text={'95%'}/>
                            </div>
                            <div className={'row'}>
                                <Typography component={'span'}
                                            className={'text-center'}>Swahili</Typography>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className={'row'}
                                 style={{ width: 50, height: 50 }}>
                                <CircularProgressbar value={25}
                                                     styles={buildStyles({
                                                       pathColor: '#9C4B04',
                                                       textColor: 'black'
                                                     })} text={'95%'}/>
                            </div>
                            <div className={'row'}>
                                <Typography component={'span'}
                                            className={'text-center'}>Mandarin</Typography>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </Card>
            <Divider/>
            <Card id={'programming'}>
                <MDBCardBody>
                    <Skill value={'95%'} title={'ReactJS'}/>
                    <Skill value={'85%'} title={'Java'}/>
                    <Skill value={'75%'} title={'Spring Boot'}/>
                </MDBCardBody>
            </Card>
            <Divider/>
            <Card>
                <div className={'text-center'}>
                    <Button className={'mx-auto'}>Download CV</Button>
                </div>
            </Card>
            <Divider/>
            <Card>
                <div className={'row'}>
                    <Socials link={'https://github.com/godzillajim'}
                             Icon={GitHub}/>
                    <div className={'col'}>
                        <IconButton
                            href={'https://www.linkedin.com/in/jimna-njoroge-4b5a4b178/'}>
                            <LinkedIn color={'primary'}/>
                        </IconButton>
                    </div>
                    <div className={'col'}>
                        <IconButton>
                            <Twitter href={'https://twitter.com/Sir_TerryJones'}
                                     color={'primary'}/>
                        </IconButton>
                    </div>
                    <div className={'col'}>
                        <IconButton href={'https://bitbucket.org/godzillajim/'}>
                            <Assignment color={'primary'}/>
                        </IconButton>
                    </div>
                </div>
            </Card>
        </div>
  )
}

export default SideBar
