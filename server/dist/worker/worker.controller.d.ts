import { WorkerService } from "./worker.service";
export declare class WorkerController {
    private workerService;
    constructor(workerService: WorkerService);
    getFibonacci(index: number): Promise<number>;
}
