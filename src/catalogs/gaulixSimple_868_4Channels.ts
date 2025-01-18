import {
	Config_DeviceConfig_RebroadcastMode,
	Config_DeviceConfig_Role,
	Config_LoRaConfig_ModemPreset,
	Config_LoRaConfig_RegionCode,
} from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/config_pb";
import type { CatalogDefinition } from "../../src/types";
import { fromByteArray, toByteArray } from "base64-js";
import { Channel_Role } from "@buf/meshtastic_protobufs.bufbuild_es/meshtastic/channel_pb";

const GaulixSimple_868_4Channels: CatalogDefinition = {
	id: "GaulixSimple_868_4Channels",
	metadata: {
		name: "Gaulix Client 868MHz 4Cx",
		description: "Configuration standard Gaulix en 868MHz avec 4 canaux",
		website: "https://gaulix.fr",
		documentation: "https://gaulix.fr/les-qr-codes-de-parametrages-rapides-2/",
		logo: "https://gaulix.fr/wp-content/uploads/logo_Gaulix_v.png",
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
			modemPreset: Config_LoRaConfig_ModemPreset.LONG_MODERATE,
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
			overrideFrequency: 869.4625244140625,
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
				name: "Fr_Balise",
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
		{
			index: 1,
			settings: {
				channelNum: 0,
				psk: toByteArray("AQ=="),
				name: "Fr_EMCOM",
				id: 0,
				uplinkEnabled: true,
				downlinkEnabled: true,
				moduleSettings: {
					positionPrecision: 32,
					isClientMuted: false,
				},
			},
			role: Channel_Role.SECONDARY,
		},
		{
			index: 2,
			settings: {
				channelNum: 0,
				psk: toByteArray("AQ=="),
				name: "Fr_BlaBla",
				id: 0,
				uplinkEnabled: true,
				downlinkEnabled: true,
				moduleSettings: {
					positionPrecision: 32,
					isClientMuted: false,
				},
			},
			role: Channel_Role.SECONDARY,
		},
		{
			index: 3,
			settings: {
				channelNum: 0,
				psk: toByteArray("AQ=="),
				name: "Fr_Tech",
				id: 0,
				uplinkEnabled: true,
				downlinkEnabled: true,
				moduleSettings: {
					positionPrecision: 32,
					isClientMuted: false,
				},
			},
			role: Channel_Role.SECONDARY,
		},
	],
};
export { GaulixSimple_868_4Channels };
