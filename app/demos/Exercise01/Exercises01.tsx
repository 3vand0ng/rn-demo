import { NavigationContainer } from '@react-navigation/native'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../store'
import React, { useCallback, useEffect, useState } from 'react'
import AuthNavigator from '../../navigators/AuthNavigator'
import AppNavigator from '../../navigators/AppNavigator'
import navigationTheme from '../../navigators/navigationTheme'
import { useNetInfo } from '@react-native-community/netinfo'
import AppNoticeText from '../../components/AppNoticeText'
// import AppLoading from 'expo-app-loading'
import * as SplashScreen from 'expo-splash-screen'
import authStorage from '../../utils/authStorage'
import jwtDecode from 'jwt-decode'
import useAuth from '../../hooks/useAuth'
import { View } from 'react-native'

function Exercises01(props: any) {
  // const LoggedIn = useSelector((state: RootState) => state.auth.LoggedIn)
  const { user, setUser, setTokenHeader } = useAuth()

  const [isReady, setIsReady] = useState<boolean>(false)
  const { isConnected } = useNetInfo()

  const restoreToken = async () => {
    const token = await authStorage.getToken()
    if (!token) return
    if (token) {
      setTokenHeader(token)
      setUser(jwtDecode(token))
    }
  }

  // if (!isReady)
  //   return (
  //     <AppLoading
  //       startAsync={restoreToken}
  //       onFinish={() => setIsReady(true)}
  //       onError={(err) => {
  //         console.log(err)
  //       }}
  //     />
  //   )

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()
        await restoreToken()
      } catch (e) {
        console.log(e)
      } finally {
        // Tell the application to render
        setIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync()
    }
  }, [isReady])

  if (!isReady) {
    return null
  }

  const LoggedIn = !!user

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer theme={navigationTheme}>
        {LoggedIn ? <AppNavigator /> : <AuthNavigator />}
        {!isConnected && <AppNoticeText>No Internet Connection</AppNoticeText>}
      </NavigationContainer>
    </View>
  )
}

export default Exercises01
