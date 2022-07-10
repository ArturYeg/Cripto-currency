import React from "react";
import Header from "./components/common/Header";
import List from "./components/list/list";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import Detail from "./components/detail/detail";
import NotFound from "./components/notFound/notFound";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={'/'} component={List} />
          <Route path={'/currency'} component={Detail} />
          <Route component={NotFound} />

        </Switch>
        </div>
    </BrowserRouter>

  );
}

export default App;
