import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import RequestList from './components/RequestList'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <RequestList />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}
