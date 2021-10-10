import React from 'react'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import { Menu, MoreVert } from '@material-ui/icons'

// eslint-disable-next-line react/prop-types
const TopBar = ({ summary, handleOpenSummary, menu, handleCloseMenu }) => {
  return (
        <AppBar>
            <Toolbar>
                <IconButton onClick={() => handleOpenSummary(!summary)}
                            edge={'start'} color={'white'}
                            className={'mr-auto'}>
                    <MoreVert/>
                </IconButton>
                <IconButton
                    onClick={() => handleCloseMenu(!menu)}
                    color={'white'} className={'ml-auto'}>
                    <Menu/>
                </IconButton>
            </Toolbar>
        </AppBar>
  )
}
export default TopBar
