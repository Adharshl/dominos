
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const STORE = "STORE"



export function store(data) {
  console.log(data)

  return {
    type: "STORE",
    payload: data
  }
}


export function increment(add) {

  return {
    type: INCREMENT,
    payload: add
  };
};

export function decrement(remove) {
  return {
    type: "DECREMENT",
    payload: remove
  };
};

