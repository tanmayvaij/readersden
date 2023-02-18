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
import './Signup.css'

const Signup: React.FC = () => {

    const [state, setState] = useState({ name: "", email: "", number: "", password: "", cpassword: "" })

    const { name, email, number, password } = state

    const signUp = async () => {
        
        const res = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name, email, number, password })
        })

        const data = await res.json()

        console.log(data)
        
        if (data.success) {

            localStorage.setItem("authtoken", data.authtoken)

            window.location.href = "/"

        }

    }

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>

                    <IonTitle>Signup</IonTitle>

                    <IonButtons slot="end">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>

                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonItem>
                    <IonLabel position="floating">Full Name</IonLabel>
                    <IonInput
                        type="text"
                        placeholder="Enter full name"
                        value={state.name}
                        name="name"
                        onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                    >
                    </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput
                        type="email"
                        placeholder="Enter email address"
                        value={state.email}
                        name="email"
                        onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                    >
                    </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Phone number</IonLabel>
                    <IonInput
                        type="tel"
                        placeholder="Enter phone number"
                        value={state.number}
                        name="number"
                        onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                    >
                    </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput
                        type="password"
                        placeholder="Set your password"
                        value={state.password}
                        name="password"
                        onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                    >
                    </IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Confirm Password</IonLabel>
                    <IonInput
                        type="password"
                        placeholder="Confirm your password"
                        value={state.cpassword}
                        name="cpassword"
                        onIonChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                    >
                    </IonInput>
                </IonItem>

                <IonButton onClick={signUp}>Sign Up</IonButton>

            </IonContent>

        </IonPage>
    )
}

export default Signup
