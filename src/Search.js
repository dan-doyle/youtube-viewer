import React, { useState } from 'react';

export default function Search(props) {
    const { setCurrentChannelId } = props;
    const [channelId, setChannelId] = useState('');

    const keyUpHandler = (e) => {
        if(e.keyCode === 13) {
            setCurrentChannelId(channelId);
        }
    }

    return (
    <div className='search'>
        <input type='text' placeholder='Enter your favourite channel ID' onChange={e => setChannelId(e.target.value)} onKeyUp={e => keyUpHandler(e)}/>
        <button onClick={() => setCurrentChannelId(channelId)} >Get Videos</button> 
    </div>
    )
}