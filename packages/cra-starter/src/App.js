
import { APP_ID } from "./environment";
import { usePrifina } from "@prifina/hooks-v2"
function App() {
  console.log(APP_ID);

  console.log(usePrifina());

  return (
    <div>Your {APP_ID} App here</div>
  );
}

export default App;
