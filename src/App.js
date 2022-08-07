import { Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Layout from './components/Layout'
import './App.scss';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search/>}/>
      </Route>
    </Routes>

  </>
  )
}

export default App;
