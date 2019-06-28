// @flow

import DeviceInfo from 'react-native-device-info'
import { Platform, } from 'react-native'
import {
  PERCENT_DIVIDER,
  ROUNDING_DEGREE,
  START_DATE,
  END_DATE,
} from '../constants'
import type { DeviceInfoType, } from '../flowAliases'

export const getDeviceInfo = async (): Promise<DeviceInfoType> => {
  const info: DeviceInfoType = {}

  info.OS = Platform.OS
  info['OS version'] = DeviceInfo.getSystemVersion()
  info['API level'] = Platform.Version
  info.Type = DeviceInfo.getDeviceType()
  info.Name = DeviceInfo.getDeviceName()
  info.Model = DeviceInfo.getModel()
  info.Brand = DeviceInfo.getBrand()
  info.Country = DeviceInfo.getDeviceCountry()
  info.Manufacturer = DeviceInfo.getManufacturer()
  info.Timezone = DeviceInfo.getTimezone()

  const battery: number = await DeviceInfo.getBatteryLevel()
  info['Battery level'] = `${Math.round(battery * PERCENT_DIVIDER) /
    ROUNDING_DEGREE}%`

  info['App name'] = DeviceInfo.getApplicationName()
  info['App was installed'] = String(
    new Date(DeviceInfo.getFirstInstallTime())
  ).slice(START_DATE, END_DATE)

  info['Is camera'] = await DeviceInfo.getCameraPresence()
  info['Is airplane mode'] = await DeviceInfo.isAirPlaneMode()
  info['Is emulator'] = DeviceInfo.isEmulator()

  return info
}
