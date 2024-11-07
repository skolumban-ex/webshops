import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import HelloModuleService from "src/modules/hello/service"
import { HELLO_MODULE } from "src/modules/hello"

export async function GET (
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void> {
    const helloModuleService: HelloModuleService = req.scope.resolve(
        HELLO_MODULE
    )

    const my_custom = await helloModuleService.createMyCustoms({
        name: "test"
    })

    res.json({
        my_custom
    })
}