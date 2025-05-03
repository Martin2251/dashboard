import React from 'react'
import { Header } from '~/components'
const user ={name:"martin"}

const dashboard = () => {
  return (
  <main className='dashboard wrapper'>
    <Header   title={`Welcome ${user?.name ?? 'Guesr'}`} desc="track in real time"/>
    DASHBOARD PAGE CONTENTS
  </main>
  )
}

export default dashboard
