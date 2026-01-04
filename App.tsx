
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Text } from './src/components/Text/Text';

function App() {
  return (
    <SafeAreaProvider> 
      <Text italic bold preset='headingLarge' >|Coffestack #€´∑ß∂´</Text>
      <Text preset='headingLarge' >|Coffestack #€´∑ß∂´</Text>
      <Text preset='headingMedium'>|Coffestack #€´∑ß∂´</Text>
    </SafeAreaProvider>
  );
}

export default App;
