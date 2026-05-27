/**
 * 电池信息类型定义
 */
export interface BatteryInfo {
  /** 电量百分比 0-100 */
  level: number;
  /** 是否正在充电 */
  isCharging: boolean;
  /** 是否连接电源（充电线插入） */
  isPluggedIn: boolean;
  /** 电池状态描述 */
  state: 'unknown' | 'unplugged' | 'charging' | 'full';
}

export interface BatteryInfoModule {
  /** 获取电池信息 */
  getBatteryInfo(): Promise<BatteryInfo>;
  /** 开启电池监听（可选） */
  startMonitoring(): void;
  /** 停止电池监听（可选） */
  stopMonitoring(): void;
}
