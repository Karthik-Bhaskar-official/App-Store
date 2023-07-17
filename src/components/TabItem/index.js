// Write your code here
import './index.css'

const TabItem = props => {
  const {name, selectCategory, isTrue} = props
  const {displayText} = name
  const callBack = () => {
    selectCategory(displayText)
  }
  return (
    <li>
      <button
        type="button"
        onClick={callBack}
        className={isTrue ? 'blue-color' : ''}
      >
        {displayText}
      </button>

      <hr className={isTrue ? 'hr' : ''} />
    </li>
  )
}

export default TabItem
