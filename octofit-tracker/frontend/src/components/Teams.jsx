import CollectionPage from './CollectionPage.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const apiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

const columns = [
  { label: 'Team', fields: ['name', 'teamName'] },
  { label: 'Members', fields: ['members', 'memberCount'] },
  { label: 'Score', fields: ['score', 'points'] },
  { label: 'Created', fields: ['createdAt', 'date'] },
]

export default function Teams() {
  return (
    <CollectionPage
      resource="teams"
      apiUrl={apiUrl}
      title="Teams"
      description="Squads, rosters, and team performance."
      columns={columns}
    />
  )
}