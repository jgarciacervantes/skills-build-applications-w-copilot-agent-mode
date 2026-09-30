import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function getCellValue(record, fields) {
  const value = fields
    .map((field) => record?.[field])
    .find((fieldValue) => fieldValue != null)

  if (value == null || value === '') return '—'
  if (Array.isArray(value)) {
    return value
      .map((item) => getCellValue(item, ['name', 'username', 'email']))
      .join(', ')
  }
  if (typeof value === 'object') {
    return value.name ?? value.username ?? value.email ?? value.title ?? JSON.stringify(value)
  }

  return String(value)
}

export default function CollectionPage({ resource, apiUrl, title, description, columns }) {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [reloadCount, setReloadCount] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    fetchCollection(apiUrl, controller.signal)
      .then(setRecords)
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message || 'Unable to load this collection.')
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [resource, apiUrl, reloadCount])

  return (
    <section aria-labelledby={`${resource}-heading`}>
      <div className="eyebrow">OctoFit Tracker / Data</div>
      <div className="collection-heading">
        <div>
          <h1 id={`${resource}-heading`}>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="collection-tools">
          <span className="data-count" aria-live="polite">
            {loading ? 'Loading' : `${records.length} records`}
          </span>
          <button
            className="refresh-button"
            type="button"
            onClick={() => {
              setLoading(true)
              setError('')
              setReloadCount((count) => count + 1)
            }}
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="table-frame">
        {loading ? (
          <div className="collection-message" role="status">
            <span className="loading-mark" aria-hidden="true" />
            <strong>Loading {title.toLowerCase()}</strong>
          </div>
        ) : error ? (
          <div className="collection-message is-error" role="alert">
            <strong>Could not load {title.toLowerCase()}</strong>
            <p>{error}. Check the API URL and try again.</p>
          </div>
        ) : records.length === 0 ? (
          <div className="collection-message">
            <strong>No {title.toLowerCase()} yet</strong>
            <p>New records will appear here when they are available from the API.</p>
          </div>
        ) : (
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  {columns.map((column) => <th key={column.label}>{column.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={record._id ?? record.id ?? `${resource}-${index}`}>
                    {columns.map((column) => (
                      <td key={column.label}>{getCellValue(record, column.fields)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}