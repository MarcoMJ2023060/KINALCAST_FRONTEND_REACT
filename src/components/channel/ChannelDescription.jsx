import React from 'react'
import PropTypes from 'prop-types'
import { useFollowChannel, useUserDetails } from '../../shared/hooks'

const FollowButton = ({channelId, getChannels}) => {
    const { followChannel } =  useFollowChannel()

    const handleFollowChannel = () => {
        followChannel(channelId, getChannels)
    }

    return(
        <button className='channel-follow-button' onClick={handleFollowChannel}>
            Seguir canal
        </button>
    )
}

FollowButton.propTypes = {
    channelId: PropTypes.string.isRequired,
    getChannels: PropTypes.func.isRequired
}

export const ChannelDescription = ({
    username,
    title,
    description,
    channelId,
    getChannels
}) => {
    const { isLogged } = useUserDetails()

  return (
    <div className='channel-description-container'>
        <span className='channel-description-title'>
            {username}
            <span>
            {isLogged && (
                <FollowButton channelId={channelId} getChannels={getChannels}/>
                )}
            </span>
        </span>
        
        <span className='channel-description-title'>{title}</span>
        <div className='channel-description-box'>
            <span className='channel-description'>{description}</span>
        </div>
    </div>
  )
}

ChannelDescription.propTypes = {
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    channelId: PropTypes.string.isRequired,
    getChannels: PropTypes.func.isRequired
}
