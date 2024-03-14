export default function Scoreboard({ score, maxScore }) {
  return (
    <section>
      <h2>SCORE: {score}</h2>
      <h2>MAX SCORE: {maxScore}</h2>
    </section>
  );
}
