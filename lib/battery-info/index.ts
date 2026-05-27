import { NativeModules } from 'react-native';
import type { BatteryInfo } from './types';

const { BatteryInfoModule: NativeModule } = NativeModules;

export async function getBatteryInfo(): Promise<BatteryInfo> {
  if (!NativeModule) {
    console.warn('[BatteryInfo] 原生模块未找到，返回模拟数据');
    return {
      level: 75,
      isCharging: false,
      isPluggedIn: false,
      state: 'unplugged',
    };
  }

  try {
    const result = await NativeModule.getBatteryInfo();
    return {
      level: result.level ?? result.batteryLevel ?? 0,
      isCharging: result.isCharging ?? false,
      isPluggedIn: result.isPluggedIn ?? false,
      state: result.state ?? 'unknown',
    };
  } catch (error) {
    console.error('[BatteryInfo] 获取电池信息失败:', error);
    throw error;
  }
}

export default { getBatteryInfo };
