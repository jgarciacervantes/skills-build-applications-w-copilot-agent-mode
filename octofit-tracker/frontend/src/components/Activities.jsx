import CollectionPage from './CollectionPage.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const apiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

const columns = [
  { label: 'Activity', fields: ['name', 'activityType', 'type'] },
  { label: 'Athlete', fields: ['userName', 'user', 'userId'] },
  { label: 'Duration', fields: ['duration', 'durationMinutes'] },
  { label: 'Distance', fields: ['distance', 'distanceKm'] },
  { label: 'Date', fields: ['date', 'createdAt'] },
]

export default function Activities() {
  return (
    <CollectionPage
      resource="activities"
      apiUrl={apiUrl}
      title="Activities"
      description="Training sessions recorded across the team."
      columns={columns}
    />
  )
}