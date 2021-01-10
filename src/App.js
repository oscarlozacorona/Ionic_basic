import React, { useState } from "react";
import { 
    IonApp,
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonToast,
    IonToolbar,
    IonTitle
} from "@ionic/react";
import { play as playIcon } from "ionicons/icons";

function App() {
    const [showToast, setShowToast] = useState(false);

    const handleClick = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
    };

    return (
        <IonApp>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>My App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton color="primary" onClick={handleClick}>
                    <IonIcon icon={playIcon} slot="start"/>
                    Click Me
                </IonButton>
                <IonToast isOpen={showToast} message="Hello World!" />
            </IonContent>
        </IonApp>
    );
}

export default App;
