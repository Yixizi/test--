import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { EntireWrapper } from './style'
import { getEntireRoomsData } from '../../servers/modules/entire'
import { changeHeaderConfig } from "@/store/modules/main.js";
import { fetchRoomList } from '../../store/modules/entire/createActions'



const Entire = memo(() => {
  const dispatch=useDispatch()


  useEffect(()=>{
    dispatch(fetchRoomList())
    // getEntireRoomsData().then(res=>console.log(res))
    dispatch(changeHeaderConfig({isFixed:true,topAlpha:false}));
  },[dispatch])
  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>

    </EntireWrapper>
  )
})

export default Entire