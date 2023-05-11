/* eslint-disable react/prop-types */
export default function Button({ handleClick, answer }) {
  return (
    <button type="button" onClick={handleClick}>
      {answer.toUpperCase()}
    </button>
  );
}
