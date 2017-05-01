import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Bird from '../containers/bird'
import PipePairs from '../containers/pipePairs'

class App extends React.Component {
  constructor(props) {
    super(props);
    document.onkeypress = (event) => {
      this.state.triggerFly();
    }
  }

  render() {
    const { game, triggerFly } = this.props;
    const { isPlaying, score } = this.props.game;

    let landClasses = classnames({
      land: true,
      sliding: isPlaying,
    });

    return <div className='app'>
        <div className='scene' onMouseDown={triggerFly} onTouchStart={triggerFly}>
          <Bird />
          <PipePairs />
          <div className={landClasses}></div>
        </div>
      </div>
  }
}

App.propTypes = {
  game: PropTypes.shape({
      isPlaying: PropTypes.bool.isRequired,
      score: PropTypes.number.isRequired
  }).isRequired,
  triggerFly: PropTypes.func.isRequired
};

export default App;