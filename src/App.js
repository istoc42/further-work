import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import RequestList from './components/RequestList'
import Footer from './components/Footer'
import PathTblBtn from './components/PathTblBtn'
import PathologistsTable from './pages/PathologistsTable'
import ReqFormBtn from './components/ReqFormBtn'

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
                <PathTblBtn />
                <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path="/pathologist-table"
            element={
              <>
                <Header />
                <PathologistsTable />
                <ReqFormBtn />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}
