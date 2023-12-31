import { I18nextProvider } from 'react-i18next';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import i18n from '../i18n';
import store from '../store/store';
import theme from '../theme/Theme';
import Router from '../Router/Router';
import { BrowserRouter } from 'react-router-dom';
import { Fonts } from '../components/Fonts';
import { Focus } from '../components/Focus';
import { ScrollBar } from '../components/Scrollbar';
import InnactivityTimer from '../components/InnactivityTimer';

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<Provider store={store}>
				<ChakraProvider theme={theme}>
					<BrowserRouter>
						<InnactivityTimer>
							<Focus />
							<Fonts />
							<ScrollBar />
							<Router />
						</InnactivityTimer>
					</BrowserRouter>
				</ChakraProvider>
			</Provider>
		</I18nextProvider>
	);
}

export default App;
