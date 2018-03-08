import React from "react";
import { increaseVote, decreaseVote } from "../actions";
import { connect } from "react-redux";

function ContestantCard(props) {
  console.log(increaseVote);
  console.log(props);

  const handleIncreaseVote = () => {
    props.dispatchIncreaseVote(props.contestant.id);
  };
  const handleDecreaseVote = () => {
    props.dispatchDecreaseVote(props.contestant.id);
  };

  const swapImage = () => {
    if (props.contestant.votes > 4) {
      return "https://i.pinimg.com/564x/9f/bf/85/9fbf8558c0e8cc26309186f5e01d231f--in-the-basement-twin-peaks.jpg";
    } else if (props.contestant.votes < -4) {
      return "https://78.media.tumblr.com/c881b915fc70fa49d99c31f816da684c/tumblr_osbgxuKD2t1voc1nyo1_500.jpg";
    } else {
      return props.contestant.image;
    }
  };

  return (
    <div className="card">
      <h2>
        Queen {props.contestant.name}
      </h2>
      <p>
        Votes: {props.contestant.votes}
      </p>
      <img alt={props.contestant.name} src={swapImage()} />
      <br />
      <button onClick={handleIncreaseVote}>Vote</button>
      <button onClick={handleDecreaseVote}>Unvote</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchIncreaseVote: id => dispatch(increaseVote(id)),
    dispatchDecreaseVote: id => dispatch(decreaseVote(id))
  };
};

export default connect(null, mapDispatchToProps)(ContestantCard);
