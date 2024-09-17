import React from 'react'

import './styled.scss'

function BlockIntroduceGame(props) {
  const {imageLarge, imageSmall, tileSmall, contentSmall} = props
  return (
    <div className='block-introduce-game'>
      <div className='large-block'>
        <img src={imageLarge} alt={imageLarge}/>
      </div>
      <div className='small-block d-flex align-items-center'>
        <img src={imageSmall} alt={imageSmall}/>
        <div className='content'>
          <h3>{tileSmall}</h3>
          <div>{contentSmall}</div>
        </div>
        <button>View</button>
      </div>
    </div>
  )
}

export default BlockIntroduceGame