import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Channels } from '../channel/Channels'
import { Settings } from '../settings/Settings'
import { ChannelView } from '../channel/ChannelView'
import PropTypes from 'prop-types'

export const Content = ({channels, getChannels}) => {
  return (
    <div className='content-container'>
        <Routes>
            <Route path='settings' element={<Settings/>}/>
            <Route path='channels' element={<Channels channels={channels}/>}/>
            <Route path='channel/:id' element={<ChannelView getChannels={getChannels}/>}/>
        </Routes>
    </div>
  )
}

Content.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatarUrl: PropTypes.string.isRequired
    })
  ).isRequired,
  getChannels: PropTypes.func.isRequired
}