import React from 'react'

import { withErrorApi } from '../../hoc-helpers/withErrorApi';

import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';

import {getApiResource} from '../../utils/network';
import {API_PEOPLE} from '../../constants/api';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';

import {useEffect, useState} from 'react'

import './PeoplePage.css'
import HeaderNav from '../../components/HeaderNav/HeaderNav';



function PeoplePage ({setErrorApi})  {

    const [people, setPeople] = useState(null)

const getResource = async (url) => {
    const res = await getApiResource(url)

    if(res) {
        const peopleList = res.results.map(({name, url}) => {
            const id = getPeopleId(url);
            const img = getPeopleImg(id)
    
    
            return {
                id,
                name,
                img
            }
        })
        setPeople(peopleList)
        setErrorApi(false)
    }else {
        setErrorApi(true)
    }
   
}



useEffect(() => {
    getResource(API_PEOPLE)
}, )

  return (
    <>
        <HeaderNav/>    
        {people && <PeopleList people={people} />}
            
        
    </>
  )
}

export default withErrorApi(PeoplePage)
