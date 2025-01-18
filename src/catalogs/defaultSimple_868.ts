import { Channel_Role } from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/channel_pb";
import type { CatalogDefinition } from "../../src/types";
import {
	Config_DeviceConfig_RebroadcastMode,
	Config_DeviceConfig_Role,
	Config_LoRaConfig_ModemPreset,
	Config_LoRaConfig_RegionCode,
} from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/config_pb";
import { fromByteArray, toByteArray } from "base64-js";

const DefaultSimple_868: CatalogDefinition = {
	id: "DefaultSimple_868",
	metadata: {
		name: "Client 868MHz",
		description: "Configuration simple pour Client EU 868MHz",
		website: "https://meshtastic.org",
		documentation:
			"https://meshtastic.org/docs/getting-started/initial-config/",
		logo: "https://meshtastic.org/design/logo/svg/Mesh_Logo_Black.svg",
	},
	config: {
		device: {
			role: Config_DeviceConfig_Role.CLIENT,
			rebroadcastMode: Config_DeviceConfig_RebroadcastMode.ALL,
			nodeInfoBroadcastSecs: 3600,
			isManaged: false,
		},
		lora: {
			usePreset: true,
			modemPreset: Config_LoRaConfig_ModemPreset.LONG_FAST,
			bandwidth: 0,
			spreadFactor: 0,
			codingRate: 0,
			frequencyOffset: 0,
			region: Config_LoRaConfig_RegionCode.EU_868,
			hopLimit: 3,
			txEnabled: true,
			txPower: 27,
			channelNum: 0,
			overrideDutyCycle: false,
			sx126xRxBoostedGain: true,
		},
	},
	modules: {
		neighborInfo: {
			enabled: true,
			updateInterval: 14400,
		},
	},
	channels: [
		{
			index: 0,
			settings: {
				channelNum: 0,
				psk: toByteArray("AQ=="),
				name: "",
				id: 0,
				uplinkEnabled: true,
				downlinkEnabled: true,
				moduleSettings: {
					positionPrecision: 32,
					isClientMuted: false,
				},
			},
			role: Channel_Role.PRIMARY,
		},
	],
};
export { DefaultSimple_868 };
