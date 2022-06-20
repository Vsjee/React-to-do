export const VisibilityControl = ({ isChecked, setShowComplete, cleanTask }) => {

  const handleDelete = () => {
    if (window.confirm('are you sure you want to delete it?')) {
      cleanTask()
    }
  }

  return (
    <div className='
      d-flex 
      justify-content-between
      bg-secondary
      text-white
      text-center
      p-2 border-secondary
    '>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          checked={isChecked}
          onChange={(e) =>
            setShowComplete(e.target.checked)}
        />
        <label>Show task done</label>
      </div>

      <button onClick={handleDelete} className='btn btn-danger btn-sn'>
        Clear
      </button>
    </div>
  )
}