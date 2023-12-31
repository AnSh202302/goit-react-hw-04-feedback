import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <li>Good: {good}</li>

      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {countPositiveFeedbackPercentage}%</li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
