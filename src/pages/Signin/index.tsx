import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react'
import { useState } from 'react'
import { GlobalStates } from '../../context'
import './index.css'

const Signin: React.FC = () => {

    const { apiUrl } = GlobalStates()

    const [state, setState] = useState({ email: "", password: "" })

    const signIn = async () => {

        const res = await fetch(`${apiUrl}/api/auth/signin`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(state)
        })

        const data = await res.json()

        if (data.success) localStorage.setItem("authtoken", data.authtoken)
        
        window.location.reload()

    }

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                    <IonButtons slot="end">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <div>

                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput
                            name="email"
                            value={state.email}
                            onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                            placeholder="Enter email address"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput
                            name="password"
                            value={state.password}
                            onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                            placeholder="Set your password"></IonInput>
                    </IonItem>

                    <IonButton onClick={signIn} >Sign up</IonButton>

                </div>
            </IonContent>

        </IonPage>
    )
}

export default Signin
