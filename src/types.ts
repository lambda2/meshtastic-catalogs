/* eslint-disable */
// @ts-nocheck

import * as admin_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/admin_pb.js";
import * as cannedmessages_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/cannedmessages_pb.js";
import * as channel_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/channel_pb.js";
import * as config_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/config_pb.js";
import * as mesh_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/mesh_pb.js";
import * as module_config_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/module_config_pb.js";
import * as portnums_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/portnums_pb.js";
import * as paxcount_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/paxcount_pb.js";
import * as remote_hardware_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/remote_hardware_pb.js";
import * as telemetry_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/telemetry_pb.js";
import * as xmodem_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/xmodem_pb.js";
import * as apponly_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/apponly_pb.js";
import * as clientonly_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/clientonly_pb.js";
import * as connection_status_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/connection_status_pb.js";
import * as deviceonly_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/deviceonly_pb.js";
import * as localonly_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/localonly_pb.js";
import * as mqtt_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/mqtt_pb.js";
import * as rtttl_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/rtttl_pb.js";
import * as storeforward_pb_js from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/storeforward_pb.js";

declare namespace protobufs {
	export {
		admin_pb_js as Admin,
		apponly_pb_js as AppOnly,
		cannedmessages_pb_js as CannedMessages,
		channel_pb_js as Channel,
		clientonly_pb_js as ClientOnly,
		config_pb_js as Config,
		connection_status_pb_js as ConnectionStatus,
		deviceonly_pb_js as DeviceOnly,
		localonly_pb_js as LocalOnly,
		mesh_pb_js as Mesh,
		module_config_pb_js as ModuleConfig,
		mqtt_pb_js as Mqtt,
		paxcount_pb_js as PaxCount,
		portnums_pb_js as Portnums,
		remote_hardware_pb_js as RemoteHardware,
		rtttl_pb_js as Rtttl,
		storeforward_pb_js as StoreForward,
		telemetry_pb_js as Telemetry,
		xmodem_pb_js as Xmodem,
	};
}

type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>;
};

export interface CatalogMetadata {
	name: string;
	website?: string;
	documentation?: string;
	description?: string;
	logo?: string;
}

export interface CatalogDefinition {
	id: string;
	metadata: CatalogMetadata;
	config?: DeepPartial<Protobuf.LocalOnly.LocalConfig>;
	modules?: DeepPartial<Protobuf.LocalOnly.LocalModuleConfig>;
	channels?: DeepPartial<Protobuf.Channel.Channel>[];
}

// export interface Channel {
//   index: number;
//   settings?: ChannelSettings;
//   role: Channel_Role;
// }

// export interface ChannelSettings {
//   channelNum: number;
//   psk: string;
//   name: string;
//   id: number;
//   uplinkEnabled: boolean;
//   downlinkEnabled: boolean;
//   moduleSettings?: ModuleSettings;
// }

// export interface ModuleSettings {
//   positionPrecision: number;
//   isClientMuted: boolean;
// }

// export type Channel_Role = "DISABLED" | "PRIMARY" | "SECONDARY";

// export interface Config {
//   device?: Config_DeviceConfig;
//   position?: Config_PositionConfig;
//   power?: Config_PowerConfig;
//   network?: Config_NetworkConfig;
//   display?: Config_DisplayConfig;
//   lora?: Config_LoRaConfig;
//   bluetooth?: Config_BluetoothConfig;
//   security?: Config_SecurityConfig;
//   sessionkey?: Config_SessionkeyConfig;
// }

// export interface Config_DeviceConfig {
//   role: Config_DeviceConfig_Role;
//   serialEnabled: boolean;
//   buttonGpio: number;
//   buzzerGpio: number;
//   rebroadcastMode: Config_DeviceConfig_RebroadcastMode;
//   nodeInfoBroadcastSecs: number;
//   doubleTapAsButtonPress: boolean;
//   isManaged: boolean;
//   disableTripleClick: boolean;
//   tzdef: string;
//   ledHeartbeatDisabled: boolean;
// }

// export type Config_DeviceConfig_Role =
//   | "CLIENT"
//   | "CLIENT_MUTE"
//   | "ROUTER"
//   | "ROUTER_CLIENT"
//   | "REPEATER"
//   | "TRACKER"
//   | "SENSOR"
//   | "TAK"
//   | "CLIENT_HIDDEN"
//   | "LOST_AND_FOUND"
//   | "TAK_TRACKER";

// export type Config_DeviceConfig_RebroadcastMode =
//   | "ALL"
//   | "ALL_SKIP_DECODING"
//   | "LOCAL_ONLY"
//   | "KNOWN_ONLY";

// export interface Config_PositionConfig {
//   positionBroadcastSecs: number;
//   positionBroadcastSmartEnabled: boolean;
//   fixedPosition: boolean;
//   gpsEnabled: boolean;
//   gpsUpdateInterval: number;
//   gpsAttemptTime: number;
//   positionFlags: number;
//   rxGpio: number;
//   txGpio: number;
//   broadcastSmartMinimumDistance: number;
//   broadcastSmartMinimumIntervalSecs: number;
//   gpsEnGpio: number;
//   gpsMode: Config_PositionConfig_GpsMode;
// }

// export type Config_PositionConfig_PositionFlags =
//   | "UNSET"
//   | "ALTITUDE"
//   | "ALTITUDE_MSL"
//   | "GEOIDAL_SEPARATION"
//   | "DOP"
//   | "HVDOP"
//   | "SATINVIEW"
//   | "SEQ_NO"
//   | "TIMESTAMP"
//   | "HEADING"
//   | "SPEED";

// export type Config_PositionConfig_GpsMode =
//   | "DISABLED"
//   | "ENABLED"
//   | "NOT_PRESENT";

// export interface Config_PowerConfig {
//   isPowerSaving: boolean;
//   onBatteryShutdownAfterSecs: number;
//   adcMultiplierOverride: number;
//   waitBluetoothSecs: number;
//   sdsSecs: number;
//   lsSecs: number;
//   minWakeSecs: number;
//   deviceBatteryInaAddress: number;
//   powermonEnables: bigint;
// }

// export interface Config_NetworkConfig {
//   wifiEnabled: boolean;
//   wifiSsid: string;
//   wifiPsk: string;
//   ntpServer: string;
//   ethEnabled: boolean;
//   addressMode: Config_NetworkConfig_AddressMode;
//   ipv4Config?: Config_NetworkConfig_IpV4Config;
//   rsyslogServer: string;
// }

// export type Config_NetworkConfig_AddressMode = "DHCP" | "STATIC";

// export interface Config_NetworkConfig_IpV4Config {
//   ip: number;
//   gateway: number;
//   subnet: number;
//   dns: number;
// }

// export interface Config_DisplayConfig {
//   screenOnSecs: number;
//   gpsFormat: Config_DisplayConfig_GpsCoordinateFormat;
//   autoScreenCarouselSecs: number;
//   compassNorthTop: boolean;
//   flipScreen: boolean;
//   units: Config_DisplayConfig_DisplayUnits;
//   oled: Config_DisplayConfig_OledType;
//   displaymode: Config_DisplayConfig_DisplayMode;
//   headingBold: boolean;
//   wakeOnTapOrMotion: boolean;
//   compassOrientation: Config_DisplayConfig_CompassOrientation;
// }

// export type Config_DisplayConfig_GpsCoordinateFormat =
//   | "DEC"
//   | "DMS"
//   | "UTM"
//   | "MGRS"
//   | "OLC"
//   | "OSGR";

// export type Config_DisplayConfig_DisplayUnits = "METRIC" | "IMPERIAL";

// export type Config_DisplayConfig_OledType =
//   | "OLED_AUTO"
//   | "OLED_SSD1306"
//   | "OLED_SH1106"
//   | "OLED_SH1107";

// export type Config_DisplayConfig_DisplayMode =
//   | "DEFAULT"
//   | "TWOCOLOR"
//   | "INVERTED"
//   | "COLOR";

// export type Config_DisplayConfig_CompassOrientation =
//   | "DEGREES_0"
//   | "DEGREES_90"
//   | "DEGREES_180"
//   | "DEGREES_270"
//   | "DEGREES_0_INVERTED"
//   | "DEGREES_90_INVERTED"
//   | "DEGREES_180_INVERTED"
//   | "DEGREES_270_INVERTED";

// export interface Config_LoRaConfig {
//   usePreset: boolean;
//   modemPreset: Config_LoRaConfig_ModemPreset;
//   bandwidth: number;
//   spreadFactor: number;
//   codingRate: number;
//   frequencyOffset: number;
//   region: Config_LoRaConfig_RegionCode;
//   hopLimit: number;
//   txEnabled: boolean;
//   txPower: number;
//   channelNum: number;
//   overrideDutyCycle: boolean;
//   sx126xRxBoostedGain: boolean;
//   overrideFrequency: number;
//   paFanDisabled: boolean;
//   ignoreIncoming: number[];
//   ignoreMqtt: boolean;
//   configOkToMqtt: boolean;
// }

// export type Config_LoRaConfig_RegionCode =
//   | "UNSET"
//   | "US"
//   | "EU_433"
//   | "EU_868"
//   | "CN"
//   | "JP"
//   | "ANZ"
//   | "KR"
//   | "TW"
//   | "RU"
//   | "IN"
//   | "NZ_865"
//   | "TH"
//   | "LORA_24"
//   | "UA_433"
//   | "UA_868"
//   | "MY_433"
//   | "MY_919"
//   | "SG_923";

// export type Config_LoRaConfig_ModemPreset =
//   | "LONG_FAST"
//   | "LONG_SLOW"
//   | "VERY_LONG_SLOW"
//   | "MEDIUM_SLOW"
//   | "MEDIUM_FAST"
//   | "SHORT_SLOW"
//   | "SHORT_FAST"
//   | "LONG_MODERATE"
//   | "SHORT_TURBO";

// export interface Config_BluetoothConfig {
//   enabled: boolean;
//   mode: Config_BluetoothConfig_PairingMode;
//   fixedPin: number;
// }

// export type Config_BluetoothConfig_PairingMode =
//   | "RANDOM_PIN"
//   | "FIXED_PIN"
//   | "NO_PIN";

// export interface Config_SecurityConfig {
//   publicKey: Uint8Array;
//   privateKey: Uint8Array;
//   adminKey: Uint8Array[];
//   isManaged: boolean;
//   serialEnabled: boolean;
//   debugLogApiEnabled: boolean;
//   adminChannelEnabled: boolean;
// }

// export type RemoteHardwarePinType =
//   | "UNKNOWN"
//   | "DIGITAL_READ"
//   | "DIGITAL_WRITE";

// // Module configs

// export interface ModuleConfig {
//   mqtt?: ModuleConfig_MQTTConfig;
//   serial?: ModuleConfig_SerialConfig;
//   externalNotification?: ModuleConfig_ExternalNotificationConfig;
//   storeForward?: ModuleConfig_StoreForwardConfig;
//   rangeTest?: ModuleConfig_RangeTestConfig;
//   telemetry?: ModuleConfig_TelemetryConfig;
//   cannedMessage?: ModuleConfig_CannedMessageConfig;
//   audio?: ModuleConfig_AudioConfig;
//   remoteHardware?: ModuleConfig_RemoteHardwareConfig;
//   neighborInfo?: ModuleConfig_NeighborInfoConfig;
//   ambientLighting?: ModuleConfig_AmbientLightingConfig;
//   detectionSensor?: ModuleConfig_DetectionSensorConfig;
//   paxcounter?: ModuleConfig_PaxcounterConfig;
// }

// export interface ModuleConfig_MQTTConfig {
//   enabled: boolean;
//   address: string;
//   username: string;
//   password: string;
//   encryptionEnabled: boolean;
//   jsonEnabled: boolean;
//   tlsEnabled: boolean;
//   root: string;
//   proxyToClientEnabled: boolean;
//   mapReportingEnabled: boolean;
//   mapReportSettings?: ModuleConfig_MapReportSettings;
// }

// export interface ModuleConfig_MapReportSettings {
//   publishIntervalSecs: number;
//   positionPrecision: number;
// }

// export interface ModuleConfig_RemoteHardwareConfig {
//   enabled: boolean;
//   allowUndefinedPinAccess: boolean;
//   availablePins: RemoteHardwarePin[];
// }

// export interface ModuleConfig_NeighborInfoConfig {
//   enabled: boolean;
//   updateInterval: number;
// }

// export interface ModuleConfig_DetectionSensorConfig {
//   enabled: boolean;
//   minimumBroadcastSecs: number;
//   stateBroadcastSecs: number;
//   sendBell: boolean;
//   name: string;
//   monitorPin: number;
//   detectionTriggeredHigh: boolean;
//   usePullup: boolean;
// }

// export interface ModuleConfig_AudioConfig {
//   codec2Enabled: boolean;
//   pttPin: number;
//   bitrate: ModuleConfig_AudioConfig_Audio_Baud;
//   i2sWs: number;
//   i2sSd: number;
//   i2sDin: number;
//   i2sSck: number;
// }

// export type ModuleConfig_AudioConfig_Audio_Baud =
//   | "CODEC2_DEFAULT"
//   | "CODEC2_3200"
//   | "CODEC2_2400"
//   | "CODEC2_1600"
//   | "CODEC2_1400"
//   | "CODEC2_1300"
//   | "CODEC2_1200"
//   | "CODEC2_700"
//   | "CODEC2_700B";

// export interface ModuleConfig_PaxcounterConfig {
//   enabled: boolean;
//   paxcounterUpdateInterval: number;
//   wifiThreshold: number;
//   bleThreshold: number;
// }

// export interface ModuleConfig_SerialConfig {
//   enabled: boolean;
//   echo: boolean;
//   rxd: number;
//   txd: number;
//   baud: ModuleConfig_SerialConfig_Serial_Baud;
//   timeout: number;
//   mode: ModuleConfig_SerialConfig_Serial_Mode;
//   overrideConsoleSerialPort: boolean;
// }

// export type ModuleConfig_SerialConfig_Serial_Baud =
//   | "BAUD_DEFAULT"
//   | "BAUD_110"
//   | "BAUD_300"
//   | "BAUD_600"
//   | "BAUD_1200"
//   | "BAUD_2400"
//   | "BAUD_4800"
//   | "BAUD_9600"
//   | "BAUD_19200"
//   | "BAUD_38400"
//   | "BAUD_57600"
//   | "BAUD_115200"
//   | "BAUD_230400"
//   | "BAUD_460800"
//   | "BAUD_576000"
//   | "BAUD_921600";

// export type ModuleConfig_SerialConfig_Serial_Mode =
//   | "DEFAULT"
//   | "SIMPLE"
//   | "PROTO"
//   | "TEXTMSG"
//   | "NMEA"
//   | "CALTOPO"
//   | "WS85";

// export interface ModuleConfig_ExternalNotificationConfig {
//   enabled: boolean;
//   outputMs: number;
//   output: number;
//   outputVibra: number;
//   outputBuzzer: number;
//   active: boolean;
//   alertMessage: boolean;
//   alertMessageVibra: boolean;
//   alertMessageBuzzer: boolean;
//   alertBell: boolean;
//   alertBellVibra: boolean;
//   alertBellBuzzer: boolean;
//   usePwm: boolean;
//   nagTimeout: number;
//   useI2sAsBuzzer: boolean;
// }

// export interface ModuleConfig_StoreForwardConfig {
//   enabled: boolean;
//   heartbeat: boolean;
//   records: number;
//   historyReturnMax: number;
//   historyReturnWindow: number;
//   isServer: boolean;
// }

// export interface ModuleConfig_RangeTestConfig {
//   enabled: boolean;
//   sender: number;
//   save: boolean;
// }

// export interface ModuleConfig_TelemetryConfig {
//   deviceUpdateInterval: number;
//   environmentUpdateInterval: number;
//   environmentMeasurementEnabled: boolean;
//   environmentScreenEnabled: boolean;
//   environmentDisplayFahrenheit: boolean;
//   airQualityEnabled: boolean;
//   airQualityInterval: number;
//   powerMeasurementEnabled: boolean;
//   powerUpdateInterval: number;
//   powerScreenEnabled: boolean;
// }

// export interface ModuleConfig_CannedMessageConfig {
//   rotary1Enabled: boolean;
//   inputbrokerPinA: number;
//   inputbrokerPinB: number;
//   inputbrokerPinPress: number;
//   inputbrokerEventCw: ModuleConfig_CannedMessageConfig_InputEventChar;
//   inputbrokerEventCcw: ModuleConfig_CannedMessageConfig_InputEventChar;
//   inputbrokerEventPress: ModuleConfig_CannedMessageConfig_InputEventChar;
//   updown1Enabled: boolean;
//   enabled: boolean;
//   allowInputSource: string;
//   sendBell: boolean;
// }

// export type ModuleConfig_CannedMessageConfig_InputEventChar =
//   | "NONE"
//   | "UP"
//   | "DOWN"
//   | "LEFT"
//   | "RIGHT"
//   | "SELECT"
//   | "BACK"
//   | "CANCEL";

// export interface ModuleConfig_AmbientLightingConfig {
//   ledState: boolean;
//   current: number;
//   red: number;
//   green: number;
//   blue: number;
// }

// export interface RemoteHardwarePin {
//   gpioPin: number;
//   name: string;
//   type: RemoteHardwarePinType;
// }
