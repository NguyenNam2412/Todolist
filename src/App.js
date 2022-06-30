import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './helpers/store'
import { history } from './helpers/history'
import Login from './components/Login'
import Register from './components/Register'
import Todos from './components/Todos'

function App() {
  return (
    <Provider store={store}>
      <Routes history={history}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Provider>
  );
}

export default App;
