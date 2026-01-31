import React, { } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { getByIdProfill } from '../../api/accoutApi/accoutApi'

const Account = () => {

  const token = localStorage.getItem("token")
  const data = token ? jwtDecode(token) : null
  const { profileData } = useSelector((state) => state.profile)

  return (
    <div>
      <div>
        
      </div>
    </div >
  )
}

export default Account
