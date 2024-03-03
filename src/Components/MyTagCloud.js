import React from 'react'
import { TagCloud } from 'react-tagcloud'

const data = [
  { value: 'JavaScript', count: 40 },
  { value: 'C', count: 40 },
  { value: 'React.js', count: 40 },
  { value: 'HTML', count: 43 },
  { value: 'CSS', count: 45 },
  { value: 'Angular', count: 35 },
  { value: 'TypeScript', count: 35 },
  { value: 'Python', count: 45 },
  { value: 'Java', count: 40 },
  { value: 'SQL', count: 40 },
  { value: 'R', count: 40 },
]

/* CSS:
@keyframes blinker {
  50% { opacity: 0.0; }
}
*/


// const [color, setColor] = useState(gray)

// custom renderer is function which has tag, computed font size and
// color as arguments, and returns react component which represents tag
const customRenderer = (tag, size) => (
    <span
    key={tag.value}
    style={{
      fontSize: `${size / 1.8}em`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block'
    }}
    className='cloud-hover'
    >
      {tag.value}
    </span>
  
)

function MyTagCloud() {
  return(
    <div>
      <TagCloud 
        tags={data} 
        minSize={1} 
        maxSize={5} 
        renderer={customRenderer}
        ></TagCloud> 
    </div>
  )
}
  


export default MyTagCloud;