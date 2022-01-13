import './StoryList.scss'

import Story1 from '../../assets/images/story1.png'
import Story2 from '../../assets/images/story2.png'
import Story3 from '../../assets/images/story3.png'

import Story from '../Story/Story'

export default function StoryList({ open }) {
  return (
    <div className='story-list'>
      <Story imageUrl={Story1} />
      <Story imageUrl={Story2} />
      <Story imageUrl={Story3} />
      <Story imageUrl={Story3} />
      <Story imageUrl={Story3} />
      <Story imageUrl={Story3} />
      <Story imageUrl={Story3} />
      <Story imageUrl={Story3} />
      <Story imageUrl={Story3} />
    </div>
  )
}
