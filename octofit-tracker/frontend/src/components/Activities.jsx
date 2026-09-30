import CollectionPage from './CollectionPage.jsx'

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
      title="Activities"
      description="Training sessions recorded across the team."
      columns={columns}
    />
  )
}