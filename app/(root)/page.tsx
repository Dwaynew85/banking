import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName: 'Dwayne',
    lastName: 'Weller',
    email: 'DPWeller85@gmail.com'  
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={ loggedIn?.firstName || 'Guest' }
            subtext="Access and manage your account and transactions efficiently."
          />
          
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500000.93}
          />
        </header>

        RECENT TRANSACITONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1331.83}, { currentBalance: 4509.32}]}
      />
    </section>
  )
}

export default Home