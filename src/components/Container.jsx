import { Component } from 'react';
import Details from './Details';
import Question from './Question';

export class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      questions: {
        q1: '',
        q2: '',
        q3: '',
        other: '',
      },
      isSubmitted: false
    }
  }
  detailsSubmitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    this.setState({
      name, email
    });
  }

  submitQuestionsHandler = (event) => {
    event.preventDefault();
    this.setState({
      questions: {
        q1: event.target.q1.value,
        q2: event.target.q2.value,
        q3: event.target.q3.value,
        other: event.target.other.value,
      }
    });
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="container card mt-2">
            <h1 className="text-center text-primary">Survey Form</h1>
          </div>
        </div>
        {
          this.state.name === null && this.state.email === null ? (<Details submit={this.detailsSubmitHandler} />) : (<Question submitQuestions={this.submitQuestionsHandler} />)
        }
      </>
    );
  }
}

export default Container;