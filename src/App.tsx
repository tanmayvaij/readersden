import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

// importing pages
import Home from './pages/Home'
import Signin from './pages/Signin'
import Intro from './pages/Intro'
import Signup from './pages/Signup'

import Context, { GlobalStates } from './context'

setupIonicReact()

const RoutesWithoutUser = () => {
  return (
    <>
    <Route exact path="/" component={Intro} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/signup" component={Signup} />
    </>
  )
}

const RoutesWithUser = () => {
  return (
    <>
    <Route exact path="/" component={Home} />
    </>
  )
}


const App: React.FC = () => {

  const userExists = localStorage.getItem("user")


  return (
    <Context>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>

            { userExists ? <RoutesWithUser/> : <RoutesWithoutUser/> }

          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </Context>
  )
}

export default App
