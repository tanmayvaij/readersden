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
import './Signup.css'

const Signin: React.FC = () => {
    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>

                    <IonTitle>Signin</IonTitle>

                    <IonButtons slot="end">
                        <IonBackButton defaultHref="#"></IonBackButton>
                    </IonButtons>

                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>

                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput type="email" placeholder="Enter email"></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput type="password" placeholder="Enter password"></IonInput>
                </IonItem>

                <IonButton>Sign In</IonButton>

            </IonContent>

        </IonPage>
    )
}

export default Signin
