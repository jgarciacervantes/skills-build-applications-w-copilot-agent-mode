import CollectionPage from './CollectionPage.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const apiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

const columns = [
  { label: 'Athlete', fields: ['name', 'username', 'firstName'] },
  { label: 'Email', fields: ['email'] },
  { label: 'Team', fields: ['teamName', 'team'] },
  { label: 'Points', fields: ['points', 'score'] },
]

export default function Users() {
  return (
    <CollectionPage
      resource="users"
      apiUrl={apiUrl}
      title="Athletes"
      description="People and profiles in the OctoFit community."
      columns={columns}
    />
  )
}