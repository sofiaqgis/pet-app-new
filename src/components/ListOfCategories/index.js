import React, { useEffect, useState } from 'react'
// import { doc, getDoc } from 'firebase/firestore'
// import { Category } from '../Category'
// import { List, Item } from './styles'
// import db from '../db.json'
// import { getStorage, ref } from 'firebase/storage'
// import { db } from '../utils/FireBaseConfig'

export const ListOfCategories = () => {
  const [categoryList, setCategoryList] = useState([])
  // const storage = getStorage()
  // const pathReference = ref(storage, 'db.json')
  // const url = db

  useEffect(function () {
    fetch('https://firebasestorage.googleapis.com/v0/b/api-pet.appspot.com/o/db.json?alt=media&token=20334ac3-7c2d-402c-9274-f2aaa898df9f')
      .then(response => response.json())
      .then(response => {
        const categories = response.categories.map(category => <li key={category.id}>{category.name}</li>)
        setCategoryList(categories)
      })
      .catch(error => {
        console.log('Error fetching data:', error)
      })
  }, [])

  return (
    <div>
      <ul>
        {categoryList}
      </ul>
    </div>
  )
}

// {
// categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
// }
// el rest operator {...} le pasa todas las props por defecto
