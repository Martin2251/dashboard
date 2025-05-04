import React from 'react'
import { Header, StatsCard, TripCard } from '~/components'
const user ={name:"martin"}

const dashboardStats={
    totalUsers: 12450,
    usersJoined:{currentMonth:218,lastMonth:176},
    totalTrips:3210,
    tripsCreated:{currentMonth:150, lastMonth:250},
    userRole:{total:63, currentMonth:16, lastMonth:10}
}

const dashboard = () => {
  return (
  <main className='dashboard wrapper'>
    <Header   title={`Welcome ${user?.name ?? 'Guesr'}`} description="track in real time"/>
    <section className='flex flex-col gap-6'>

    </section>
    <StatsCard  />
<TripCard />
  </main>
  )
}

export default dashboard
