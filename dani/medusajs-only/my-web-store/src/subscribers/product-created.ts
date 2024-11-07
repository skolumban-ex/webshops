import { SubscriberArgs, type SubscriberConfig } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";
import { IProductModuleService } from "@medusajs/framework/types";

// This function will be called when a product is created
export default async function productCreateHandler({
    event: { data },
    container,
}: SubscriberArgs<{ id: string} >) {
    const productModuleService: IProductModuleService = 
    container.resolve(Modules.PRODUCT)

    const productId = data.id
    
    const product = await productModuleService.retrieveProduct(
        productId
    )

    console.log("Product created:", product)
}

// This configuration object tells Medusa to listen for the "product.created" event
export const config: SubscriberConfig = {
    event: "product.created",
}