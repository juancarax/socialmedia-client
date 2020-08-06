import React from 'react';
import { HomePageContainer, BlueBackGround } from './HomePage.styles'
import Post from '../../components/post/post.component'
import Directory from '../../components/directory/directory.component'
import MakePost from '../../components/makepost/makepost.component'
const HomePage = () => {

    return(

        
    <HomePageContainer>
     <BlueBackGround>
       <MakePost />
      </BlueBackGround>
      <Directory />
    </HomePageContainer>)
      
}


export default HomePage;


