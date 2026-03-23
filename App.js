import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { htmlContent } from './assets/htmlContent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <WebView 
          source={{ html: htmlContent }} 
          style={styles.webview}
          scrollEnabled={false}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowFileAccess={true}
          allowUniversalAccessFromFileURLs={true}
          allowFileAccessFromFileURLs={true}
          originWhitelist={['*']}
          mixedContentMode="compatibility"
        />
      </View>
      <StatusBar style="auto" hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
  },
});
