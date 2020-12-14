import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import './Home.css';

const NewItem: React.FC <RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton defaultHref='/home'/>
                </IonButtons>
          <IonTitle>NewItem</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
       New Item page
      </IonContent>
    </IonPage>
  );
};

export default NewItem;
