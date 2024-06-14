import {BlogCard} from './BlogCard'; 
import './Blog.css';
import Gun from '../assests/PixelGun.png';
import Sword from '../assests/PixelSword.png'; 


const blogData = [
  {
    id: 1,
    title: 'Critical Analysis of Net Art',
    summary: 'Exploring the idea of nostalgia, loss and the effects of rapidly developing technologies on digital artifacts.',
    blogLink: "/blog/myessay",
  },
  {
    id: 2,
    title: 'Doc',
    summary: 'Doc of intresting links and articles',
    blogLink: "",
  },
  {
    id: 3,
    title: 'Dev Diary',
    summary: 'Log or Journal of my process working on this website',
    blogLink: "/blog/devblog",
  },

];
export const Blog =() =>{
    return (
      <div className='Blog'>

        <div className='heart'>♡</div>
              <div className="blog-container">
        {blogData.map((blogPost) => (
          <BlogCard
            key={blogPost.id}
            title={blogPost.title}
            summary={blogPost.summary}
            blogLink={blogPost.blogLink}
          />
        ))}
      </div>
        <div>
          <img src={Gun} alt="gun pixel art" className='Gun' />
          <img src={Sword} alt="sword pixel art" className='Sword'/>
        </div>
        <div className='heart'>♡</div>
        
      </div>
    );
  };
  //add like button 
  //side imgs