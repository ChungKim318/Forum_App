import {View, Text, Animated, Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import {colors, responsiveHeight, responsiveWidth} from 'themes'
import Modal from 'react-native-modal'
import {styles} from './styles'
const {height} = Dimensions.get('window')

class ToastManager extends React.PureComponent {
  state = {
    isShow: false,
    text: '',
    opacityValue: new Animated.Value(1),
    barWidth: new Animated.Value(responsiveWidth(200)),
    backgroundColor: colors.light_blue,
    textColor: colors.white,
    animationStyle: {
      rightInLeftOut: {
        animationIn: 'slideInRight',
        animationOut: 'slideOutLeft',
      },
      rightInOut: {
        animationIn: 'slideInRight',
        animationOut: 'slideOutRight',
      },
      fancy: {
        animationIn: 'zoomInDown',
        animationOut: 'zoomOutUp',
      },
    },
  }

  constructor(props) {
    super(props)
    ToastManager.__singletonRef = this
  }

  static default = text => {
    ToastManager.__singletonRef.show(text, colors.light_blue, colors.black)
  }
  static dark = text => {
    ToastManager.__singletonRef.show(text, colors.black, colors.white)
  }

  static info = text => {
    ToastManager.__singletonRef.show(text, colors.denim, colors.black)
  }

  static success = text => {
    ToastManager.__singletonRef.show(text, colors.mint, colors.white)
  }

  static warning = text => {
    ToastManager.__singletonRef.show(text, colors.yellow, colors.black)
  }

  static error = text => {
    ToastManager.__singletonRef.show(text, colors.red, colors.black)
  }
  componentWillUnmount() {
    this.resetAll()
  }
  show(text = '', backgroundColor = colors.light_blue, textColor = colors.black) {
    let duration = 3000

    this.state.barWidth.setValue(responsiveWidth(200)) //reset barWidth value
    this.setState({
      isShow: true,
      duration,
      text,
      backgroundColor,
      textColor,
    })
    this.isShow = true
    if (duration !== this.props.end) this.close(duration)
  }

  close(duration) {
    if (!this.isShow && !this.state.isShow) return
    this.resetAll()
    this.timer = setTimeout(() => {
      this.setState({isShow: false})
      this.isShow = false
    }, duration)
  }

  positionVertical() {
    if (this.props.position === 'top') return responsiveHeight(10)
    if (this.props.position === 'center') return height / 2 - responsiveHeight(9)
    return height - responsiveHeight(20) - responsiveHeight(10)
  }
  positionHorizontal() {
    if (this.props.positionHorizontal === 'left')
      return {
        left: 0,
        right: null,
      }
    if (this.props.positionHorizontal === 'right')
      return {
        right: 0,
        left: null,
      }
    return {
      left: null,
      right: null,
    }
  }

  handleBar = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.barWidth, {
      toValue: 0,
      duration: this.state.duration,
      useNativeDriver: false,
    }).start()
  }

  pause = () => {
    const oldDuration = this.state.duration
    this.setState({oldDuration, duration: 10000})
    Animated.timing(this.state.barWidth).stop()
  }

  resume = () => {
    const oldDuration = this.state.oldDuration
    this.setState({duration: oldDuration, oldDuration: 0})

    Animated.timing(this.state.barWidth, {
      toValue: 0,
      duration: this.state.duration,
      useNativeDriver: false,
    }).start()
  }

  hideToast = () => {
    this.resetAll()
    this.setState({isShow: false})
    this.isShow = false
    if (!this.isShow && !this.state.isShow) return
  }

  resetAll = () => {
    clearTimeout(this.timer)
  }

  render() {
    this.handleBar()
    return (
      <Modal
        animationIn={
          this.props.animationIn || this.state.animationStyle[this.props.animationStyle].animationIn
        }
        animationOut={
          this.props.animationOut || this.state.animationStyle[this.props.animationStyle].animationOut
        }
        backdropTransitionOutTiming={this.props.backdropTransitionOutTiming}
        backdropTransitionInTiming={this.props.backdropTransitionInTiming}
        animationInTiming={this.props.animationInTiming}
        animationOutTiming={this.props.animationOutTiming}
        onTouchEnd={() => this.resume()}
        onTouchStart={() => this.pause()}
        swipeDirection={['up', 'down', 'left', 'right']}
        onModalHide={() => this.resetAll()}
        style={styles.modelContainer}
        isVisible={this.state.isShow}
        coverScreen={false}
        backdropColor={this.props.backdropColor}
        backdropOpacity={this.props.backdropOpacity}
        hasBackdrop={this.props.hasBackdrop}>
        <View
          style={[
            styles.mainContainer,
            {
              backgroundColor: this.state.backgroundColor,
              top: this.positionVertical(),
              left: this.positionHorizontal().left,
              right: this.positionHorizontal().right,
            },
          ]}>
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => this.hideToast()} activeOpacity={0.9} style={styles.hideButton}>
              <Text style={styles.hideText}>+</Text>
            </TouchableOpacity>

            <Text style={[styles.textStyle, {color: this.state.textColor}]}>{this.state.text}</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <Animated.View style={[styles.progressBar, {width: this.state.barWidth}]} />
          </View>
        </View>
      </Modal>
    )
  }
}

ToastManager.defaultProps = {
  style: {},
  position: 'top',
  positionHorizontal: 'center',
  end: 0,
  duration: 3000,
  animationInTiming: 300,
  animationOutTiming: 300,
  backdropTransitionInTiming: 300,
  backdropTransitionOutTiming: 300,
  animationIn: '',
  animationOut: '',
  animationStyle: 'rightInLeftOut',
  hasBackdrop: false,
  backdropColor: 'black',
  backdropOpacity: 0.5,
}

export const Toast = {
  default: ToastManager.default,
  dark: ToastManager.dark,
  info: ToastManager.info,
  success: ToastManager.success,
  warning: ToastManager.warning,
  error: ToastManager.error,
}

export default ToastManager
