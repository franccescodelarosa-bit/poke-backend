import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AuthService', () => {
  let service: AuthService;

  const prismaMock = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('No esta definido', () => {
    expect(service).toBeDefined();
  });

  it('Email dpulicado o no registrado', async () => {
    prismaMock.user.findUnique.mockResolvedValue({ email: 'test@test.com' });

    await expect(
      service.register({
        email: 'test@test.com',
        password: '123456',
        name: 'Test',
      }),
    ).rejects.toThrow();
  });
});
