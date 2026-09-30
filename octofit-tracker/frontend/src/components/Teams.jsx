import CollectionPage from './CollectionPage.jsx'

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
      title="Teams"
      description="Squads, rosters, and team performance."
      columns={columns}
    />
  )
}