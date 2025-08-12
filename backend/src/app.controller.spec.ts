import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

describe('root', () => {
  it('should return the welcome message', () => {
    const result = appController.getRoot();
    expect(result).toHaveProperty('message', 'Welcome to Job Test IS Dev Backend!');
    expect(result).toHaveProperty('version', '1.0.0');
    expect(result).toHaveProperty('timestamp');
  });
});
});
