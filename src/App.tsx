import { Suspense, Fragment, useMemo } from 'react';
import {Switch, Route} from 'react-router-dom'
import routes from 'config/routes'
import Nav from 'components/nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'assets/css/custom.css'
import { Container } from 'reactstrap'

function Index(){
  useMemo(() => {
    document.title = 'Home'
  }, [])
  return (
    <Fragment>
      <Nav />
      <Container className="themed-container py-2" fluid="lg">
        <div className="mb-5" />
        <div className="px-md-3">
          <Suspense fallback="">
            <Switch>
              { routes.map((r, key) => <Route  key={key} {...r} />) }
            </Switch>
          </Suspense>
        </div>
      </Container>
    </Fragment>
  );
}

export default Index;
