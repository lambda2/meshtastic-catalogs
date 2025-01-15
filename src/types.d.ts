import type Protobuf from "@meshtastic/js";

export interface ConfigMetadata {
  name: string;
  website?: string;
}

export interface ConfigDefinition {
  config?: Protobuf.Config.Config;
  modules?: Protobuf.ModuleConfig.ModuleConfig;
  channels?: Protobuf.Channel.Channel[];
}
