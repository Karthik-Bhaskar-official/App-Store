// Write your code here

import './index.css'

const AppItem = props => {
  const {name} = props
  const {appName, imageUrl} = name
  return (
    <li className="li">
      <img src={imageUrl} className="img" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
