import React  from 'react'


export const useLoader =  (isLoading) => {
  return (
      <div>
          { isLoading ? 
          <img src={window.location.origin + '/images/loaderhooks.gif'} alt="" />
          : <div/> }
      </div>
  )
}
