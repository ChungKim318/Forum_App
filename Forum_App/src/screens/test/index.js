import {View, Text, TextInput, KeyboardAvoidingView, Dimensions} from 'react-native'
import React from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const {height} = Dimensions.get('window')

const TestScreen = () => {
  return (
    // <View style={{flex: 1}}>
    //   <View style={{height: 50, width: '100%', backgroundColor: 'red'}}></View>

    //   <KeyboardAwareScrollView
    //     style={{flex: 1}}
    //     onKeyboardWillShow={e => {
    //       console.log('SHOW', e)
    //       console.log('HEIGHT', height)
    //     }}
    //     onKeyboardWillHide={e => {
    //       console.log('HIDE', e)
    //     }}>
    //     <TextInput placeholder="title" style={{height: 100, width: '100%', backgroundColor: 'yellow'}} />
    //   </KeyboardAwareScrollView>

    //   <View
    //     style={{
    //       position: 'absolute',
    //       width: '100%',
    //       //   bottom: 0,
    //       left: 0,
    //       top: 408,
    //       backgroundColor: 'green',
    //       height: 100,
    //     }}></View>
    // </View>
    <></>
  )
}

// Lấy ScreenY - height của view ở ngoài

export default TestScreen
