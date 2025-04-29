import React from 'react'
import { Navbar } from '../../components/navs/Navbar'
import { Content } from '../../components/dashboard/Content'
import { useChannels } from '../../shared/hooks'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import './dashboardPage.css'


export const DashboardPage = () => {
  const { allChannels, getChannels, isFetching } = useChannels()

  if(isFetching){
    return <LoadingSpinner/>
  }

  return (
    <div className='dashboard-container'>
      <div className='dashboard-background'/>
        <Navbar/>
        <Content channels={allChannels} getChannels={getChannels}/>
    </div>
  )
}

