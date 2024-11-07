import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";

type WorkflowInput = {
    name: string
}

const step1 = createStep("step-1", async () => {
    return new StepResponse("Hello from step 1");
})

const step2 = createStep("step-2", async ({ name }: WorkflowInput) => {
    return new StepResponse(`Hello ${name} from step 2`);
})