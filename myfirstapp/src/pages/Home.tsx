import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC <RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        This is my first ionic app
        <p>If you interest about myself go to <a>My page</a></p>
        <IonList>
          <IonItem>
            <p>Project 1</p>
          </IonItem>
          <IonItem>
            <p>Project 2</p>
          </IonItem>
          <IonItem>
            <p>Project 3</p>
          </IonItem>
        </IonList>
        <IonButton onClick={()=>props.history.push("/new")}>
          Social media ei eieieieieiei
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
