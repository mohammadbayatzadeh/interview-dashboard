import { BrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import RoutesMap from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import defaultOptions from "./config/reactQuery";

function App() {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DashboardLayout>
          <RoutesMap />
        </DashboardLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
