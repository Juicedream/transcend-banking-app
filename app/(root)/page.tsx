import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.action'
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.name || "Guest"}
          subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
          accounts={[]}
          totalBanks={3}
          totalCurrentBalance={1250.45}

          />
        </header>
        RECENT TRANSACTIONS
      </div>
      {/* right side bar */}
      <RightSidebar 
      user={loggedIn} 
      transactions={[]}
      banks={[{
        currentBalance: 123.50, 
      }, 
        {
        currentBalance: 223.50,
      }]}
      />
    </section>
  )
}

export default Home