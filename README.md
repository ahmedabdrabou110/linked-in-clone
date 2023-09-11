# Linked in Clone version 1 
#### This Application is same as linkedin , you can sign in with gmail , post a photo , a video and post a text This is version 1 only .

## You can see preview of project with [linked in clone](https://linked-in-clone-d0e88.web.app/)

### In this project I use some libraray in addition to React.js
# 1. firebase
This enable to save the posts , authentication and post photo , video with link and text.
```
npm install firebase
npm install -g firebase tools
```

We can you it for hosting the project to live
```
firebase init
firebase deploy
```
# 2. react-player
#### ReactPlayer will remain open source, but with a higher rate of fixes and releases over time. Thanks to everyone in the community for your ongoing support.

```
npm install react-player
```

# 3. react-redux
#### React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

```
npm install react-redux
```

# 4. redux 
#### Redux is a predictable state container for JavaScript apps.

###### It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.

``` 
npm install redux 
```

# 5. redux-thunk 
#### A thunk function may contain any arbitrary logic, sync or async, and can call dispatch or getState at any time.

``` 
npm install redux-thunk
```

##### In the same way that Redux code normally uses action creators to generate action objects for dispatching instead of writing action objects by hand, we normally use thunk action creators to generate the thunk functions that are dispatched. A thunk action creator is a function that may have some arguments, and returns a new thunk function. The thunk typically closes over any arguments passed to the action creator, so they can be used in the logic:

```
const thunkFunction = (dispatch, getState) => {
  // logic here that can dispatch actions or read state
}

store.dispatch(thunkFunction)

``` 
# 6. styled-components 
#### Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

``` 
npm install styled-components
``` 

# This is Version 1 , I will update this is project always
