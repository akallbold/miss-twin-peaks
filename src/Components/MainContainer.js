import React from "react";
import Contestants from "./Contestants";

class MainContainer extends React.Component {
  // state = {
  //   contestants: {
  //     1: {
  //       id: 1,
  //       name: "Audrey",
  //       votes: 0,
  //       image: "https://78.media.tumblr.com/f9a4944929699e9c3a4bf23424d02a1a/tumblr_oabp1karlS1tumicto10_400.png"
  //     },
  //     2: {
  //       id: 2,
  //       name: "Shelly",
  //       votes: 0,
  //       image: "https://pbs.twimg.com/profile_images/551606789595090945/zgAnDSnS_400x400.jpeg"
  //     },
  //     3: {
  //       id: 3,
  //       name: "Donna",
  //       votes: 0,
  //       image: "https://arbitrarylaw.files.wordpress.com/2013/01/lara-flynn-boyle.jpg"
  //     }
  //   }
  // }

  //
  // decreaseVote = contestantId => {
  //   this.setState({
  //     contestants: {
  //       ...this.state.contestants,
  //       [contestantId]: {
  //         ...this.state.contestants[contestantId],
  //         votes: this.state.contestants[contestantId]["votes"] - 1
  //       }
  //     }
  //   });
  // };

  render() {
    console.log(Contestants);
    return (
      <div>
        <Contestants
        // increaseVote={this.increaseVote}
        // decreaseVote={this.decreaseVote}
        />
        <hr />
        <img
          alt="person"
          src="https://pre00.deviantart.net/a5c1/th/pre/i/2009/288/5/d/miss_twin_peaks_poster_by_lyonlamb.png"
        />
      </div>
    );
  }
}

export default MainContainer;
