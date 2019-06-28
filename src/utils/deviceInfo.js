// @flow

import DeviceInfo from 'react-native-device-info'
import { Platform, } from 'react-native'
import {
  PERCENT_DIVIDER,
  ROUNDING_DEGREE,
  START_DATE,
  END_DATE,
  DEVICE_INFO_PROPERTY_NAMES,
} from '../constants'
import type { DeviceInfoType, } from '../flowAliases'

const {
  version,
  level,
  battery,
  appName,
  appDate,
  isCamera,
  airplaneMode,
  isEmulator,
} = DEVICE_INFO_PROPERTY_NAMES

export const getDeviceInfo = async (): Promise<DeviceInfoType> => {
  const info: DeviceInfoType = {}

  info.OS = Platform.OS
  info[version] = DeviceInfo.getSystemVersion()
  info[level] = Platform.Version
  info.Type = DeviceInfo.getDeviceType()
  info.Name = DeviceInfo.getDeviceName()
  info.Model = DeviceInfo.getModel()
  info.Brand = DeviceInfo.getBrand()
  info.Country = DeviceInfo.getDeviceCountry()
  info.Manufacturer = DeviceInfo.getManufacturer()
  info.Timezone = DeviceInfo.getTimezone()

  const batteryLevel: number = await DeviceInfo.getBatteryLevel()
  info[battery] = `${Math.round(batteryLevel * PERCENT_DIVIDER) /
    ROUNDING_DEGREE}%`

  info[appName] = DeviceInfo.getApplicationName()
  info[appDate] = String(new Date(DeviceInfo.getFirstInstallTime())).slice(
    START_DATE,
    END_DATE
  )

  info[isCamera] = await DeviceInfo.getCameraPresence()
  info[airplaneMode] = await DeviceInfo.isAirPlaneMode()
  info[isEmulator] = DeviceInfo.isEmulator()

  return info
}
