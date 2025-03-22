import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AreaCuadrado from './src/screens/AreaCuadrado'; 
import ArregloDividido5 from './src/screens/ArregloDividido'; 
import SumaArreglo from './src/screens/SumaArreglo'; 
import PromedioCalificaciones from './src/screens/PromedioCalificaciones'; 



const App = () => {
  return (
    <SafeAreaView style={{ flex: 2 }}>
      <AreaCuadrado />
      {/*<SumaArreglo/>*/}
      {/*<ArregloDividido5/>*/} 
      {/*<PromedioCalificaciones/>*/}
    </SafeAreaView>
  );
};

export default App;