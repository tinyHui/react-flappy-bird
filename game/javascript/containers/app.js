import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app.jsx'
import { flyUp, playing, startGame } from '../actions'

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerFly: () => {
      dispatch(flyUp())
    },
    startGame: () => {
      dispatch(startGame())
    }
  }
}

// function runningGame() {
//   store.dispatch(playing())
//   requestAnimationFrame(runningGame);
// }
//
// runningGame();

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
