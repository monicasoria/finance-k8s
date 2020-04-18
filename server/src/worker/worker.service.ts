import { Injectable } from "@nestjs/common";

@Injectable()
export class WorkerService {
  async fibonacci(index: number): Promise<number> {
    if (index < 2) return 1;
    return (await this.fibonacci(index - 1)) + (index - 2);
  }
}
