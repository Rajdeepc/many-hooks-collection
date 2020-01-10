import {useEffect} from 'react';
import { BackHandler } from 'react-native'


const useReactNativeAndroidBackHandler = (handler) => {
        // Frustration isolated! Yay! 🎉
        useEffect(() => {
          BackHandler.addEventListener("hardwareBackPress", handler);
      
          return () => {
            BackHandler.removeEventListener(
              "hardwareBackPress",
              handler
            );
          };
        }, [handler]);
      
}

export default useReactNativeAndroidBackHandler;