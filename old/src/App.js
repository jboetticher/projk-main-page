import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from 'components/Router'

import 'bootstrap/dist/css/bootstrap.css';
import './css/custom.css';
import './css/app.css';

function App() {
  return (
    <Root>
      <nav className="top-nav">
        <Link to="/jeremy">JEREMY</Link>
        <Link to="/">HOME</Link>
        <Link to="/kevin">KEVIN</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
