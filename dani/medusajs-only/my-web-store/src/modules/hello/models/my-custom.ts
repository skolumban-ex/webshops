import { model } from "@medusajs/framework/utils"

const MyCustom = model.define("my_custom", {
    id: model.id().primaryKey(),
    name: model.text(),
})

export default MyCustom