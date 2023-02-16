import { 
    IonBackButton, 
    IonButton, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    useIonRouter 
} from '@ionic/react'
import { App } from "@capacitor/app"
import './index.css'
import { useHistory } from 'react-router'

const Intro: React.FC = () => {

	// code for exiting app in mobile
	const ionRouter = useIonRouter()
	document.addEventListener('ionBackButton', (ev: Event) => {
		(ev as any).detail.register(-1, () => {
			if (!ionRouter.canGoBack()) App.exitApp()
		})
	})

    const history = useHistory()

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

                <IonButton onClick={() => history.push("/signin")}>Sign in</IonButton>

                <IonButton onClick={() => history.push("/signup")}>Sign up</IonButton>

            </IonContent>

        </IonPage>
    )
}

export default Intro
