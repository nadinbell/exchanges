import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Main, Exchange } from './components';
import style from './styles.css';
const App: React.FC = (props) => {
  const [ exchanges, setExchanges ] = useState([])
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/exchanges')
    .then(response => response.json())
    .then(result => {
      const activeItems = result.filter((item: any) => item.active && item.adjusted_rank);
      setExchanges(activeItems);
    })
  }, []);

  return (
    <Router>
      <div className={style.appContainer}>
      <div className={style.appInnerContainer}>
        <div className={style.linksWrapper}>
          <Link to='/'>Home</Link>
          <Link to='/main'>Exchanges</Link>
        </div>
        <Switch>
          <Route path='/main'>
            <Main exchanges={exchanges}/>
          </Route>
          <Route path='/exchange/:id?'>
            {(props: any) => (
              <Exchange {...props} exchanges={exchanges}/>
            )}
          </Route>
          <Route path='/'>
            <div>Hello page</div>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
};

export default App;