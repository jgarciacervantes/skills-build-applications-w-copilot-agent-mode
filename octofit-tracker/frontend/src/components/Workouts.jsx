import CollectionPage from './CollectionPage.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const apiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

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
      apiUrl={apiUrl}
      title="Workouts"
      description="Workout plans ready for the next session."
      columns={columns}
    />
  )
}