import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Home.css'

const Home: React.FC = () => {
	return (
		<IonPage id="main-content">

			<IonHeader>
				<IonToolbar>

					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>

					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				Home Page
			</IonContent>

		</IonPage>
	)
}

export default Home
