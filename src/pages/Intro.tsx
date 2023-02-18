import { IonButton, IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Intro.css'

import Signin from './Signin'
import Signup from './Signup'

const Intro: React.FC = () => {
    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonNavLink routerDirection="forward" component={() => <Signin />}>
                    <IonButton>Sign in</IonButton>
                </IonNavLink>

                <IonNavLink routerDirection="forward" component={() => <Signup />}>
                    <IonButton>Sign up</IonButton>
                </IonNavLink>

            </IonContent>

        </IonPage>
    )
}

export default Intro
