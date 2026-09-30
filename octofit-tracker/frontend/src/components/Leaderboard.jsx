import CollectionPage from './CollectionPage.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const apiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

const columns = [
  { label: 'Rank', fields: ['rank', 'position'] },
  { label: 'Athlete', fields: ['name', 'userName', 'user'] },
  { label: 'Team', fields: ['teamName', 'team'] },
  { label: 'Score', fields: ['score', 'points'] },
]

export default function Leaderboard() {
  return (
    <CollectionPage
      resource="leaderboard"
      apiUrl={apiUrl}
      title="Leaderboard"
      description="A live view of team and athlete standings."
      columns={columns}
    />
  )
}