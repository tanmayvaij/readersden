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

const Signup: React.FC = () => {

    const { apiUrl, user }  = GlobalStates()

    const [state, setState] = useState({
        name: "", 
        email: "", 
        number: "", 
        password: "", 
        cpassword: ""
    })

    const { name, email, number, password } = state

    const signUp = async () => {
        
        const res = await fetch(`${apiUrl}/api/auth/signup`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name, email, number, password })
        })

        const data = await res.json()

        if (data.success) {
            localStorage.setItem("authtoken", data.authtoken)
        }

    }

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                    <IonButtons slot="end">
                        <IonBackButton>Back</IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <div>

                    <IonItem>
                        <IonLabel position="floating">Full Name</IonLabel>
                        <IonInput
                            name="name"
                            value={state.name}
                            onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                            placeholder="Enter full name"
                        >
                        </IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput
                            name="email"
                            value={state.email}
                            onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                            placeholder="Enter email address"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Phone number</IonLabel>
                        <IonInput
                            name="number"
                            value={state.number}
                            onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                            placeholder="Enter phone number"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput
                            name="password"
                            value={state.password}
                            onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                            placeholder="Set your password"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Confirm Password</IonLabel>
                        <IonInput
                            name="cpassword"
                            value={state.cpassword}
                            onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                            placeholder="Confirm your password"></IonInput>
                    </IonItem>

                    <IonButton onClick={signUp} >Sign up</IonButton>

                </div>

            </IonContent>

        </IonPage>
    )
}

export default Signup
