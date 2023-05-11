import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { GlobalStyle } from './components/styles/GlobalSyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'
import { Logo } from './components/Logo/index'

const App = () => {
  return (
    <>
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
      <GlobalStyle />
    </>
  )
}

export default App
