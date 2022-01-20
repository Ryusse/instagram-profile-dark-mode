import DiscoverCard from '../DiscoverCard/DiscoverCard'

import './DiscoverCardList.scss'

import discoverImage1 from '../../assets/images/discoverimage1.jpg'
import discoverImage2 from '../../assets/images/discoverimage2.jpg'
import discoverImage3 from '../../assets/images/discoverimage3.jpg'
import discoverImage4 from '../../assets/images/discoverimage4.jpg'

export function DiscoverCardList() {
  return (
    <div className='discover-card-list'>
      <DiscoverCard url={discoverImage1} />
      <DiscoverCard url={discoverImage2} />
      <DiscoverCard url={discoverImage3} />
      <DiscoverCard url={discoverImage4} />
    </div>
  )
}
