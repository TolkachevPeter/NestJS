import { ConfigService } from "@nestjs/config";
import { TypegooseModule, TypegooseModuleOptions } from "nestjs-typegoose";

export const getMongoConfig = async(ConfigService: ConfigService): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(ConfigService),
    ...getMongoOptions()
  }
};

const getMongoString = (ConfigService: ConfigService) => {

}