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

const { totalUsers,usersJoined,totalTrips,tripsCreated,userRole } = dashboardStats;

const dashboard = () => {
  return (
  <main className='dashboard wrapper'>
    <Header   title={`Welcome ${user?.name ?? 'Guesr'}`} description="track in real time"/>
    <section className='flex flex-col gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
        <StatsCard  headerTitle='Total Users'
        total={totalUsers}
        currentMonthCount={usersJoined.currentMonth}
        lastMonthCount={usersJoined.lastMonth}

        />
          <StatsCard  headerTitle='Total Users'
        total={totalUsers}
        currentMonthCount={usersJoined.currentMonth}
        lastMonthCount={usersJoined.lastMonth}

        />
          <StatsCard  headerTitle='Total Trips'
        total={totalUsers}
        currentMonthCount={usersJoined.currentMonth}
        lastMonthCount={usersJoined.lastMonth}

        />
            <StatsCard  headerTitle='Total Trips'
        total={userRole.total}
        currentMonthCount={userRole.currentMonth}
        lastMonthCount={userRole.lastMonth}

        />
        </div>

    </section>
   
<TripCard />
  </main>
  )
}

export default dashboard
