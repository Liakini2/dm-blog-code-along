
//import necessary components and tags after creating file
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import TopicList from './Components/TopicList/TopicList'
import Post from './Components/Post/Post'

export default (
    // Switch is required to make only one component show 
    // Exact is required to make it so multiple paths can be used 
    // since all component paths start with /
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/topics' component={TopicList}/>
        <Route path='/post/:id' component={Post}/>
    </Switch>
)