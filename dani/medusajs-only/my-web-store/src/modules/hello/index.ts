import helloWorldLoader from "./loaders/hello-world";
import HelloModuleService from "./service";
import { Module } from "@medusajs/framework/utils";

export const HELLO_MODULE = "helloModuleService"

export default Module(HELLO_MODULE, {
    service: HelloModuleService,
    loaders: [helloWorldLoader]
})