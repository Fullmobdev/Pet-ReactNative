import React from 'react';
import { Route } from 'react-router-dom';
import Start from './Start';
import quizRoutes from './Onboarding/Quiz';
import Account from './Onboarding/Account';
import Success from './Onboarding/Success';
import applicationRoutes from './Application';

export default function() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Start} />
      { quizRoutes.map(r => (
        <Route key={r.path} path={`/welcome/${r.path}`} component={r.component} />
      ))}
      <Route path="/welcome/account" component={Account} />
      <Route path="/welcome/success" component={Success} />
      { applicationRoutes.map(r => (
        <Route key={r.path} path={`/application/${r.path}`} component={r.component} />
      ))}
    </React.Fragment>
  )
}