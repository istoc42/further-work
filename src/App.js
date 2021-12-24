import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Request from './components/Request'
import Footer from './components/Footer'
import RequestList from './pages/RequestList'
import ReqListBtn from './components/ReqListBtn'

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
                <Request />
                <ReqListBtn />
                <Footer />
              </>
            }
          ></Route>

          <Route path="/requestlist" element={<RequestList />} />
        </Routes>
      </div>
    </Router>
  )
}
