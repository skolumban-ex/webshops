import { MedusaService } from "@medusajs/framework/utils";
import MyCustom from "./models/my-custom";

class HelloModuleService extends MedusaService({
    MyCustom,
}) {

}

export default HelloModuleService