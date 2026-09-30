import CollectionPage from './CollectionPage.jsx'

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
      title="Leaderboard"
      description="A live view of team and athlete standings."
      columns={columns}
    />
  )
}