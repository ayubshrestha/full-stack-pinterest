import './app.css'

const App = () => {
  return (
    // fads
    <div className='app'>
      <LeftBar/>
      <div className='content'>
        <TopBar/>
        <Gallery/>
      </div>
    </div>
  )
}

export default App