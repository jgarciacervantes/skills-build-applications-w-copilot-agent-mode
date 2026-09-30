import CollectionPage from './CollectionPage.jsx'

const columns = [
  { label: 'Workout', fields: ['name', 'title'] },
  { label: 'Focus', fields: ['category', 'type'] },
  { label: 'Duration', fields: ['duration', 'durationMinutes'] },
  { label: 'Difficulty', fields: ['difficulty', 'level'] },
]

export default function Workouts() {
  return (
    <CollectionPage
      resource="workouts"
      title="Workouts"
      description="Workout plans ready for the next session."
      columns={columns}
    />
  )
}