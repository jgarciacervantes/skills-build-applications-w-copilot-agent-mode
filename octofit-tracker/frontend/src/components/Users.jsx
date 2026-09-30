import CollectionPage from './CollectionPage.jsx'

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
      title="Athletes"
      description="People and profiles in the OctoFit community."
      columns={columns}
    />
  )
}