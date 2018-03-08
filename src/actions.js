export let increaseVote = id => {
  console.log(id);
  return {
    type: "INCREASE_VOTE",
    payload: {
      id: id
    }
  };
};

export let decreaseVote = id => {
  console.log(id);
  return {
    type: "DECREASE_VOTE",
    payload: {
      id: id
    }
  };
};
