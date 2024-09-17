import React from 'react'

import './styled.scss'

function BlockIntroduceCategory(props) {
  const { imageOne, mammon, rockPaperScissors, tree, wordChinese, imageTwo } = props

  return (
    <div className='block-introduce-category'>
      <div className='col-one'>
        <img src={imageOne} alt="" style={{ width: "100%" }} />
        <div className='d-flex justify-content-between'>
          <img src={mammon} alt="" />
          <img src={rockPaperScissors} alt="" />
        </div>
      </div>
      <div className='col-two'>
        <div className='d-flex justify-content-between'>
          <img src={tree} alt="" />
          <img src={wordChinese} alt="" />
        </div>

        <img src={imageTwo} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  )
}

export default BlockIntroduceCategory