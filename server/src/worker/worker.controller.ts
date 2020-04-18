import { Controller, Get, Param } from "@nestjs/common";
import { WorkerService } from "./worker.service";

@Controller("worker")
export class WorkerController {
  constructor(private workerService: WorkerService) {}
  @Get("fibonacci/:index")
  async getFibonacci(@Param("index") index: number): Promise<number> {
    return await this.workerService.fibonacci(index);
  }
}
