/* eslint-disable react/prop-types */

export default function Home({ setPageVisible }) {
  return (
    <button type="button" onClick={() => setPageVisible(0)}>
      DEMARRER
    </button>
  );
}
