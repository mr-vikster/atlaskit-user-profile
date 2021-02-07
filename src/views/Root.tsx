import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import UserProfile from './UserProfile';
import UserProfileForm from './UserProfileForm';

const Root = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={UserProfileForm}/>
        <Route exact path="/user-profile" component={UserProfile}/>
        <Route exact path="/user-profile/edit" component={UserProfileForm}/>
      </Switch>
      <Footer />
    </Fragment>
  )
}

export default Root
