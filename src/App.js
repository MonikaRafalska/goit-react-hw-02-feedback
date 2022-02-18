import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addToGood = () => {
    this.setState({ good: this.state.good + 1 });
  };

  addToNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  addToBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <div className="App">
        <header className="App-header">
          <Section title="Please Leave Feedback">
            <FeedbackOptions onLeaveFeedback="good" options={this.addToGood}></FeedbackOptions>
            <FeedbackOptions onLeaveFeedback="neutral" options={this.addToNeutral}></FeedbackOptions>
            <FeedbackOptions onLeaveFeedback="bad" options={this.addToBad}></FeedbackOptions>
          </Section>
          <Section title="Statistics">
            {total === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercentage={positive}></Statistics>
            )}
          </Section>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.number,
};

export default App;
