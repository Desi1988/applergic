import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllergiesSelectionPage from './pages/RegisterPage/pages/AllergiesSelectionPage/AllergiesSelectionPage';
import HomePage from './pages/HomePage/HomePage';
import AllergiesConfirmationPage from './pages/RegisterPage/pages/AllergiesConfirmationPage/AllergiesConfirmationPage';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import RatePage from "./pages/RatePage/RatePage";
import CarouselPage from "./pages/CarouselPage/CarouselPage";
import RegisterDonePage from "./pages/RegisterPage/pages/RegisterDonePage/RegisterDonePage";
import ScanPage from "./pages/ScanPage/ScanPage";
import ScanResultPage from "./pages/ScanResultPage/ScanResultPage";
import DiaryPage from "./pages/DiaryPage/DiaryPage";
import InformPage from "./pages/DiaryPage/InformPage";
import EmergencyContactPage from "./pages/RegisterPage/pages/EmergencyContactPage/EmergencyContactPage";
import UserMenuPage from "./pages/UserMenuPage/UserMenuPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";

function App() {
  return (
      <Router>
        <Switch>
            <Route path="/user-menu">
                <UserMenuPage/>
            </Route>
            <Route path="/user-profile">
                <UserProfilePage/>
            </Route>
            <Route path="/diary">
                <DiaryPage/>
            </Route>
            <Route path="/inform">
                <InformPage/>
            </Route>
            <Route path="/register-done">
                <RegisterDonePage/>
            </Route>
            <Route path="/register-confirmation" component={AllergiesConfirmationPage}/>
            <Route path="/register-allergies">
                <AllergiesSelectionPage/>
            </Route>
            <Route path="/register-contact">
                <EmergencyContactPage/>
            </Route>
            <Route path="/register">
                <RegisterPage/>
            </Route>
            <Route path="/carousel">
                <CarouselPage/>
            </Route>
            <Route path="/login">
                <LogInPage/>
            </Route>
            {/*<Route path="/user-menu">
                <UserMenuPage/>
            </Route>*/}
            <Route path="/rate-page">
                <RatePage/>
            </Route>
            <Route path="/scanresult" component={ScanResultPage}/>
            <Route path="/scanner">
                <ScanPage />
            </Route>
            <Route path="/">
                <HomePage/>
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
