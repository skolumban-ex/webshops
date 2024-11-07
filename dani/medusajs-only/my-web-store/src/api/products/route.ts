import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { IProductModuleService } from "@medusajs/framework/types"
import { Modules } from "@medusajs/framework/utils"

export const GET = async (
  req: MedusaRequest, 
  res: MedusaResponse
) => {
  const productModuleService: IProductModuleService = req.scope.resolve(
    Modules.PRODUCT
  )

  const [, count] = await productModuleService
    .listAndCountProducts()

  res.json({
    count,
  })
}