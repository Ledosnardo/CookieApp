import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import Contexts from './src/contexts';

export default function App() {
  return (
    <NavigationContainer>
        <Contexts>
          <Routes />
        </Contexts>
    </NavigationContainer>
  );
}
