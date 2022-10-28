import React from 'react'
import { MessageFlow } from '../../Layouts/MessageFlow/MessageFlow';
import { Header } from '../../Layouts/Header/Header';
import { BasicDrawer } from '../../Components/BasicDrawer';

export const HomePage = () => {
  return (
    <>
      <BasicDrawer header={<Header />}/>
      <MessageFlow />
    </>
  )
}