import React from 'react'
import searchIcon from '../../images/hot-game/search-i.png'
import gameHomeicon from '../../images/hot-game/game-home-i.png'
import timeLineIcon from '../../images/hot-game/time-line-i.png'
import allGameIcon from '../../images/hot-game/all-game-i.png'
import matChuocLarge from '../../images/hot-game/mat-chuoc-large.png'
import matChuocSmall from '../../images/hot-game/mat-chuoc-small.png'
import bountyHunterHarge from '../../images/hot-game/bounty-hunter-large.png'
import bountyHunterSmall from '../../images/hot-game/bounty-hunter-small.png'

import imageMusic from '../../images/category/image-music.png'
import mammon from '../../images/category/mammon.png'
import rockPaperScissors from '../../images/category/rock-paper-scissors.png'
import tree from '../../images/category/tree.png'
import wordChinese from '../../images/category/word-chinese.png'
import panda from '../../images/category/panda.png'
import tableGames from '../../images/category/table-games.png'
import joker from '../../images/category/joker.png'

import BlockIntroduceGame from '../BlockIntroduceGame'
import BlockIntroduceCategory from '../BlockIntroduceCategory'

import './styled.scss'

const listHotGame = [
  {
    id: 1,
    imageLarge: matChuocLarge,
    imageSmall: matChuocSmall,
    tileSmall: 'Mahjong Ways',
    contentSmall: '4TECH™ has just launched their very first Mahjong inspired slot machine gam…',
  },
  {
    id: 2,
    imageLarge: bountyHunterHarge,
    imageSmall: bountyHunterSmall,
    tileSmall: 'Wild Bandito',
    contentSmall: 'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…',
  }
]

const listCategory = [
  {
    id: 1,
    imageOne: imageMusic,
    mammon: mammon,
    rockPaperScissors: rockPaperScissors,
    tree: tree,
    wordChinese: wordChinese,
    imageTwo: panda
  },
  {
    id: 2,
    imageOne: tableGames,
    mammon: mammon,
    rockPaperScissors: rockPaperScissors,
    tree: tree,
    wordChinese: wordChinese,
    imageTwo: joker
  }
]


function Body() {
  return (
    <div className='body'>
      <div className='content-left'>
        <ul>
          <li>
            <img src={searchIcon} alt='searchIcon' /><span>Search</span>
          </li>
          <li className='active'>
            <img src={gameHomeicon} alt='searchIcon' /><span>Games Home</span>
          </li>
          <li>
            <img src={timeLineIcon} alt='timeLineIcon' /><span>Timeline</span>
          </li>
          <li>
            <img src={allGameIcon} alt='allGameIcon' /><span>All Games</span>
          </li>
        </ul>
      </div>
      <div className='content-right'>
        <section>
          <h2>Hot Game</h2>
          <div className='d-flex justify-content-end'>
            <button>1</button>
            <button>2</button>
          </div>
          <div className='d-flex'>
            {
              listHotGame.map(item => {
                return (
                  <BlockIntroduceGame {...item} key={item.id} />
                )
              })
            }
          </div>
        </section>
        <section>
          <h2>Hottest Category</h2>
          <div className='d-flex justify-content-end'>
            <button>1</button>
            <button>2</button>
          </div>
          <div className='d-flex'>
            {
              listCategory.map(item => {
                return (
                  <BlockIntroduceCategory {...item} key={item.id} />
                )
              })
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default Body