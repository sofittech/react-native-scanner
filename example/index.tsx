import * as React from 'react'
import { AppRegistry } from 'react-native'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native'
import { Header, Colors } from 'react-native/Libraries/NewAppScreen'
import Scanner from 'react-native-scanner'
import { name as appName } from './app.json'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})

class App extends React.PureComponent {
  scanner = new Scanner()

  render() {
    const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <Header />
            {!usingHermes ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <Button
                title="gallery"
                onPress={() => {
                  this.scanner.scan('gallery').then(uri => console.log('URI', uri))
                }}
              />
              <Button
                title="camera"
                onPress={() => {
                  this.scanner.scan('camera').then(uri => console.log('URI', uri))
                }}
              />
              <Button
                title="select"
                onPress={() => {
                  this.scanner.scan('select').then(uri => console.log('URI', uri))
                }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

AppRegistry.registerComponent(appName, () => App)
