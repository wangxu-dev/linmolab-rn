/**
 * JSI 绑定层 - 调用 TurboModule
 *
 * 这里通过 NativeModules 访问原生模块
 * 在新架构下，这会被 TurboModule 替代
 */

import { NativeModules, Platform } from 'react-native';
import type { BatteryInfo } from '../types';

// 获取原生模块
const { BatteryInfoModule: NativeModule } = NativeModules;

/**
 * TurboModule 调用封装
 */
const NativeBatteryInfo = {
  /**
   * 获取电池信息
   */
  async getBatteryInfo(): Promise<BatteryInfo> {
    if (!NativeModule) {
      // 降级处理：返回模拟数据
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
  },
};

export default NativeBatteryInfo;
