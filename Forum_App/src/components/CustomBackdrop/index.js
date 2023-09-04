import {View, Text} from 'react-native'
import React, {useMemo} from 'react'
import {BottomSheetBackdropProps} from '@gorhom/bottom-sheet'
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from 'react-native-reanimated'

const CustomBackdrop = ({animatedIndex, style}: BottomSheetBackdropProps) => {
  //animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animatedIndex.value, [0, 1], [0, 1], Extrapolate.CLAMP),
  }))

  //styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: '#e2e2e2',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  )
  return <Animated.View style={containerStyle} />
}

export default React.memo(CustomBackdrop)
