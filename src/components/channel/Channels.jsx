import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ChannelCard } from './ChannelCard'

export const Channels = ({channels}) => {
  const navigate = useNavigate()

  const handleNavigateToChannel = (id) => {
    navigate(`/channel/${id}`)
  }

  return (
    <div className='channels-container'>
      {channels.map((c) => (
        <ChannelCard
          key={c.id}
          id={c.id}
          title={c.title}
          username={c.username}
          isOnline={c.isOnline}
          avatarUrl={c.avatarUrl}
          navigateToChannelHandler={handleNavigateToChannel}
        />
      ))
      }
    </div>
  )
}

Channels.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatarUrl: PropTypes.string.isRequired
    })
  )
}
