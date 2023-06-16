import { ChangeDetectorRef, Component, SimpleChanges, inject } from '@angular/core';
import { BlockChainAPIBalanceResponse, BlockChainAPIService, BlockChainAPITxResponse } from '../services/block-chain-api.service';
import { Observable } from 'rxjs';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loadTransactionComp: boolean
  blockChainService = inject(BlockChainAPIService)
  balanceData: BlockChainAPIBalanceResponse | undefined
  txData: BlockChainAPITxResponse | undefined

  constructor(private logger: LoggerService) {
    this.loadTransactionComp = false
  }

  loadResultComponents(walletAddress: string) {
    this.loadTransactionComp = true;
  }
}
