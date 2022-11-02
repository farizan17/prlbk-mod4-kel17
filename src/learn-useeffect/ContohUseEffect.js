import React, {useEffect} from 'react'

const Profile = ({profile}) => {
  
  useEffect(() => {
    alert("profile ditampilkan")
    return () => {
      alert("profile dihapus")
    }
  }, [])

  //percobaan useeffect di sini dan passing data dari textinput yang ada di learn-usestate
  return (
    <>
    <div> <h1>{profile.name}</h1></div>
        <div> <h1>{profile.age}</h1></div>
        </>
  )
}

export default Profile