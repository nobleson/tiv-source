/**
 * Tiv Source - Mobile Core
 *
 * Dual-profile architecture:
 * - Profile A (Social): everyday messaging + Tiv AI assistant
 * - Profile B (Vault): hidden until unlocked, for reporting & verification
 *
 * This file is the root entry. Real navigation and profile switching
 * will be implemented in Phase 0 / Phase 1.
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000' : '#fff'}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Tiv Source</Text>
        <Text style={styles.subtitle}>Mobile Core</Text>
        <Text style={styles.note}>
          Phase 0 – Foundations{'\n'}
          Dual-profile architecture coming next
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
  },
  note: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default App;
