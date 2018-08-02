# Functional components

- Do not have any state
- Do not have any life-cycle components

## render()

- a life-cycle method on class components which will render to the UI whatever is after the return statement

## React router

- Allows us to connect and link to other components via custom url

## Browser Router

- allows browser back and forward navigation
- import { BrowserRouter as Router} -> allows me to use Router in code instead of having to write BrowserRouter every time
- Specify 'exact' in a Route to make sure it shows only the specified route

## Component State

- in order to add component state:
- it must first be a class based component
- it must begin with a constructor method
- the constructor method runs super()
- then I set state within the constructor -> this.state = {}
- state is just a plain javascript object with key: value pairs

## props

- props are the properties that are passed in when the component is being called in App.js

## Redux

- Redux allows storage for state that wants to be shared with multiple React components - App state
- single source of truth
- saves creating multiple sharing paths from component to component

  **FLOW OF DATA:** 1) Action(called from a React component) -> 2) Reducer -> 3) Store(Redux database) -> 4) UI - Returns data to React component to be rendered in UI

- I never change state I just make a copy of it with new changes to be sent back to React
- I want all my requests to go through a Redux action
- I initially set up 'axios' in the onSubmit method within my register component
- Axios should be moved to Redux state

## Destructuring side note

- const { errors } = this.state;
- is the same as const errors = this.state.errors
- by putting {} around something it is like 'pulling' something out of the referenced object

## reducers

- every reducer exports a function

## actions

- everything we do in Redux is an action

## connect

- in order to use Redux in a component I need to import { connect } from 'react-redux'
- { connect } makes the connection from Redux to react
- often programmers turn a react component into a Container. (Brad Traversy does not... why?)

## mapStateToProps()

- in order to get state into a component I must use mapStateToProps function

## PropTypes

- In React any properties I have in a Component should be mapped to PropTypes
