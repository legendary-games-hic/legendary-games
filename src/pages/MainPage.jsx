import React from 'react'
import axios from 'axios'

export default function MainPage() {
    async function getData(){
        const resp = await axios.get('https://api.rawg.io/api/games?dates=2019-09-01,2019-09-30&platforms=18,1,7', {
        params: {
            key: '5b5b60451aa943a196c703c3eef1b92c',
            search: 'The Witcher 3'
        }
    });

    console.log(resp)
    }

    getData();

  return (
    <button className='btn-success'>MaindqdwqPage</button>
  )
}
