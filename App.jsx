import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import TroubleshootProductRequirements from "./components/TroubleshootProductRequirements";
import TroubleshootABREdgeCases from "./components/TroubleshootABREdgeCases";
import TroubleshootAPIIntegration from "./components/TroubleshootAPIIntegration";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/troubleshoot-product-requirements">
          <TroubleshootProductRequirements {...troubleshootProductRequirementsData} />
        </Route>
        <Route path="/troubleshoot-abr-edge-cases">
          <TroubleshootABREdgeCases {...troubleshootABREdgeCasesData} />
        </Route>
        <Route path="/troubleshoot-api-integration">
          <TroubleshootAPIIntegration {...troubleshootAPIIntegrationData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const troubleshootProductRequirementsData = {};

const troubleshootABREdgeCasesData = {};

const troubleshootAPIIntegrationData = {};

