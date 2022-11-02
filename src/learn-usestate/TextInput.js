import React from 'react'
import Profile from '../learn-useeffect/ContohUseEffect'
const TextInput = () => {
  const [profile, setProfile] = React.useState({
    name: '',
    age: '',

})
  const [showProfile, setShowProfile] = React.useState(false)


  return (
    <>
    <input type="text" value={profile.name} onChange={(e) => setProfile({...profile, name:e.target.value})}  />
    <input type="text" value={profile.age} onChange={(e) => setProfile({...profile, age:e.target.value})}  />

    <button onClick={() => setShowProfile(!showProfile)}>{showProfile ? 'hide' : 'Show'} Profile</button>
    {showProfile && <Profile profile={profile} />}
    </>
  )
}

export default TextInput