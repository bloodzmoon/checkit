import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { HomePage, CheckPage } from '@pages'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/check/keyboard" component={CheckPage.Keyboard} />
        <Route path="/check/mouse" component={CheckPage.Mouse} />
        <Route path="/check/numpad" component={CheckPage.Numpad} />
      </Switch>
      <Link
        to="/"
        style={{ position: 'absolute', top: '40px', left: '40px' }}
      >{`< Back`}</Link>
    </BrowserRouter>
  )
}

export default App
