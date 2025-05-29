import React from 'react'
import Header from './components/Header'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/page4'


const App = () => {
 

  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  )
}

export default App