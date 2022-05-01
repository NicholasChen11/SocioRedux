const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers


// ACTIONS
const BUY_ITEM = 'BUY_ITEM'
const ADD_ITEM = 'ADD_ITEM'
const BUY_SPAREPART = 'BUY_SPAREPART'

function buyItem(x=1){
  return {
    type: BUY_ITEM,
    quantity: x
  }
}

function addItem(x=1){
  return {
    type: ADD_ITEM,
    quantity: x
  }
}

function buySparepart(x=1){
  return {
    type: BUY_SPAREPART,
    quantity: x
  }
}

// INITIAL STATE

const initialItemState = {
  numOfItems: 15
}

const initialSparepartState = {
  numOfSparepart: 10
}

// REDUCER
const itemReducer = (state = initialItemState, action) => {
  switch (action.type){
    case BUY_ITEM: return {
      ...state,
      numOfItems: state.numOfItems - action.quantity
    }
    case ADD_ITEM: return {
      ...state,
      numOfItems: state.numOfItems + action.quantity
    }
    default: return state
  }
}

const sparepartReducer = (state = initialSparepartState, action) => {
  switch (action.type){
    case BUY_SPAREPART: return {
      ...state,
      numOfSparepart: state.numOfSparepart - action.quantity
    }
    default: return state
  }
}

// STORE
const rootReducer = combineReducer({
  item: itemReducer,
  sparepart: sparepartReducer
})
const store = createStore(rootReducer)

console.log('Initial State:', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State:', store.getState()))
store.dispatch(buyItem())
store.dispatch(buyItem(3))
store.dispatch(addItem(5))
store.dispatch(buySparepart(2))
unsubscribe()
