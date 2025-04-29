import React, {useEffect } from 'react'
import { useChannelDetails } from '../../shared/hooks'
import { useParams } from 'react-router-dom'
import { ChannelDescription } from './ChannelDescription'
import { ReactFlvPlayer } from 'react-flv-player'
import PropTypes from 'prop-types'
import { LoadingSpinner } from '../LoadingSpinner'

const Stream = ({streamUrl}) =>{
    return (
        <div className='channel-video-container'>
            <ReactFlvPlayer width="100%" heigth="100%" url={streamUrl}/>
        </div>
    )
}

Stream.propTypes = {
    streamUrl: PropTypes.string.isRequired
}

export const ChannelView = ({getChannels}) => {
    const { isFetching, getChannelDetails, channelDetails } = useChannelDetails()
    const { id } = useParams();

    useEffect(() =>{
        getChannelDetails(id)
    },[getChannelDetails, id])

    if(isFetching){
        return <LoadingSpinner/>
    }

  return (
    <div className='channel-container'>
        <div className='channel-video-description-section'>
            {channelDetails.isOnline ? (
                <Stream streamUrl={channelDetails.streamUrl}/>
            ) : (
                <div className='channel-offline-placeholder'>
                    <span>
                        <h1>OFFLINE 😢</h1>
                    </span>
                    <span>El canal no está transmitiendo en este momento</span>
                </div>
            )}
            <ChannelDescription
                title={channelDetails.title}
                description={channelDetails.description}
                username={channelDetails.username}
                channelId={channelDetails.id}
                getChannels={getChannels}
            />
        </div>
    </div>
  )
}

ChannelView.propTypes = {
    getChannels: PropTypes.func.isRequired
}
