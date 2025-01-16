import type Protobuf from "@meshtastic/js";

export interface CatalogMetadata {
  name: string;
  website?: string;
  documentation?: string;
  description?: string;
  logo?: string;
}

export interface CatalogDefinition {
  metadata: CatalogMetadata;
  config?: Protobuf.Config.Config;
  modules?: Protobuf.ModuleConfig.ModuleConfig;
  channels?: Protobuf.Channel.Channel[];
}
