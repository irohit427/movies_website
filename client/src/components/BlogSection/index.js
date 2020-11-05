import React from 'react'
import BlogCard from '../BlogCard';
import './BlogSection.scss'

const BlogSection = () => {
  const data = [
    {
      index: '1',
      title: 'The 25 Best Oscar-Winning Movies',
      description: 'It’s officially awards season, which means everything that’s happening now all comes down to the Academy Awards on February 9. Every drunken Golden Globes speech, every awkward red carpet interview, every time Patricia Arquette gives Meryl Streep a run for her money in eyewear—it all leads to the Academy Awards.',
      imgUrl: 'https://wartalaap.com/wp-content/uploads/2020/02/How-to-see-the-Oscar-2020-nominations-live-online.jpg'
    },
    {
      index: '2',
      title: 'The Highest-Grossing Movies of All Time Worldwide',
      description: 'Films generate income from several revenue streams, including theatrical exhibition, home video, television broadcast rights, and merchandising. However, theatrical box office earnings are the primary metric for trade publications in assessing the success of a film, mostly because of the availability of the data compared to sales figures for home video and broadcast rights.',
      imgUrl: 'https://www.themarysue.com/wp-content/uploads/2019/06/You-Can-Rent-Tony-Starks-Cabin-from-Avengers-Endgame-and-That-Feels-like-the-Perfect-Place-to-Cry.jpg'
    }
  ];

  return (
    <div className="blogSection">
      {
        data.map((b) => 
          <BlogCard key={b.index} index={b.index} title={b.title} description={b.description} imgUrl={b.imgUrl} />
        )
      }  
    </div>
  )
}

export default BlogSection;
