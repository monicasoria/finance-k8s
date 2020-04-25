import { Test, TestingModule } from '@nestjs/testing';
import { KickstarterController } from './kickstarter.controller';

describe('Kickstarter Controller', () => {
  let controller: KickstarterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KickstarterController],
    }).compile();

    controller = module.get<KickstarterController>(KickstarterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
