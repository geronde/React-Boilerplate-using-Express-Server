import React from 'react'

import ecosystem from './img/ecosystem.jpg'
import style from './css/styles.css'
class App extends React.Component{
  render() {
    return(
<div>
     <div className="header">
      <h1>React BoilerPlate</h1>
      </div>
       <div className="align-center"><img src={ecosystem}/></div> 
</div>
      )
  }
}

export default App;