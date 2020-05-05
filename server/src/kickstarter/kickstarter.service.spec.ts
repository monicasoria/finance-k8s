import { Test, TestingModule } from '@nestjs/testing';
import { KickstarterService } from './kickstarter.service';

describe('KickstarterService', () => {
  let service: KickstarterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KickstarterService],
    }).compile();

    service = module.get<KickstarterService>(KickstarterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
