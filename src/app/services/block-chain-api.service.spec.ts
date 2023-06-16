import { TestBed } from '@angular/core/testing';

import { BlockChainAPIService } from './block-chain-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('BlockChainAPIService', () => {
  let service: BlockChainAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({

    });
    service = TestBed.inject(BlockChainAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
