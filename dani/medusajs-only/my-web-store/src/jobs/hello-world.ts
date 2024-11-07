import {
    IProductModuleService,
    MedusaContainer,
} from "@medusajs/framework/types"
import { Modules } from "@medusajs/framework/utils"

// the scheduled-job function
export default async function myCustomJob(
    container: MedusaContainer
) {
    const productModuleService: IProductModuleService = container.resolve(
        Modules.PRODUCT
    )

    const [, count] = await productModuleService.listAndCountProducts()

    console.log(
        `There are ${count} products in the store!`
    )
}

// the scheduled-job configuration object
export const config = {
    name: "every-minute-message",
    // execute the job every minute
    schedule: "* * * * *",
}