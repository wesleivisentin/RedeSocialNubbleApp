
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Text } from './src/components/Text/Text';

function App() {
  return (
    <SafeAreaProvider> 
      <Text preset='headingLarge'>|Coffestack</Text>
    </SafeAreaProvider>
  );
}

export default App;
