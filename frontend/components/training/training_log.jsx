import React from 'react';
import { connect } from 'react-redux';
import { fetchUserWorkouts } from '../../actions/workout_actions';
import TrainingLogItem from './training_log_item';

class TrainingLog extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      myWorkouts: [],
      weeks: []
    }
    this.weeks = this.weeks.bind(this);
  }

  componentDidMount () {
    this.props.fetchUserWorkouts(this.props.user.id).then(() => {
      this.weeks();
    });
  }

  componentWillReceiveProps(nextProps){
    const userWorkouts = Object.values(nextProps.workouts);
    this.setState({myWorkouts: userWorkouts});
  }

  weeks () {
    let today = new Date();
    let dates = [];
    let first;
    let second;

      for (let i=0; i<55; i++) {
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        if(dd<10) {
            dd = '0'+dd
        }
        if(mm<10) {
            mm = '0'+mm
        }
        first = new Date(today);
        today.setDate(today.getDate() - 6);
        second = new Date(today);
        let dd2 = today.getDate();
        let mm2 = today.getMonth()+1; //January is 0!
        if(dd2<10) {
            dd2 = '0'+dd2
        }
        if(mm<10) {
            mm2 = '0'+mm2
        }
        let date = mm + '/' + dd + '-' + mm2 + '/' + dd2
        dates.push([date, first, second]);
        today.setDate(today.getDate() - 1);
      }

    this.setState({weeks:dates});
  }

  render () {
    const boxes = this.state.weeks.map(week => {
      return (<TrainingLogItem key={week} newer={week[1]} older={week[2]} week={week[0]} workouts={this.props.workouts}/>);
    })
    return (
      <section className="log-index">
        <div className="training-display">
          <div className="top-text">
            Training Log
          </div>
          <div className="week-days">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>
        </div>
        {boxes}
      </section>
    );
  }
}

const msp = (state) => {
  const user = state.entities.users[state.session.id];
  const workouts = state.entities.workouts;
  return {
    user,
    workouts
  }
}

const mdp = (dispatch) => {
  return {
    fetchUserWorkouts: (userId) => dispatch(fetchUserWorkouts(userId))
  }
}

export default connect(msp, mdp)(TrainingLog);