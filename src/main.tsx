import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layouts/Layout.tsx'
import { AppProvider } from './context/AppContext.tsx'

createRoot(document.getElementById('root')!).render(
	<AppProvider>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<App />} />
					
				</Route>
			</Routes>
		</BrowserRouter>
	</AppProvider>
)
