import React from 'react'
import { IconButton } from '@material-ui/core'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const Socials = ({ Icon, link }) => {
  return (
        <div className={'col'}>
            <IconButton href={link}>
                <Icon color={'primary'}/>
            </IconButton>
        </div>
  )
}
Socials.propType = {
  Icon: PropTypes.node, link: PropTypes.string
}
export default Socials
