import GrowthGraph from "./Components/CurveGraph";
function App() {
  return (
    <>
    <GrowthGraph
  data={[
    { name: 'Q1', value: 10 },
    { name: 'Q2', value: 25 },
    { name: 'Q3', value: 45 },
  ]}
  growthRate="+15%"
/>
    </>
  );
}

export default App;