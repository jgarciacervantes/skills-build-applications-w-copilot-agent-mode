import './App.css'
import logo from '../../docs/octofitapp-small.png'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <img src={logo} alt="OctoFit Tracker logo" className="img-fluid mb-3" style={{ maxWidth: '140px' }} />
          <h1 className="display-5 fw-bold mb-3">OctoFit Tracker</h1>
          <p className="lead text-muted mb-4">
            A modern multi-tier fitness application for tracking activity, teams,
            and leaderboard performance.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="https://vite.dev/" target="_blank" rel="noreferrer">
              Explore Vite
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="https://react.dev/" target="_blank" rel="noreferrer">
              Learn React 19
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 fw-semibold">Ready for the next step</h2>
              <p className="text-muted mb-0">
                Frontend and backend scaffolding are now in place for the OctoFit
                application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
