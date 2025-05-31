import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layouts/Layout.tsx'
import { AppProvider } from './context/AppContext.tsx'
import Parameter from './pages/Parameter/index.tsx'
import Result from './pages/Result/index.tsx'

createRoot(document.getElementById('root')!).render(
	<AppProvider>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout className={{ div: "mt-24", section:"w-2/5" }}/>}>
					<Route path="/" element={<App />} />
					<Route path="/parametros" element={<Parameter />} />
					
				</Route>
				<Route element={<Layout className={{ div: "mt-0", section:"w-5/5" }}/>}>
					<Route path="/resultados" element={<Result />} />

				</Route>
			</Routes>
		</BrowserRouter>
	</AppProvider>
)
