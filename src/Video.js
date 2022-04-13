import React from 'react';


export default function Video(props) {
    const { video } = props;

    return (
        <div className='videos-item'>
          <div className='video-image'>
            <a target='_blank' href={video.link}>
              <img src={`https://i4.ytimg.com/vi/${video.guid.split(':')[2]}/mqdefault.jpg`}/>
            </a>
          </div>
          <div className='video-footer'>
            <p>{video.title}</p>
          </div>
        </div>
        
    )
}