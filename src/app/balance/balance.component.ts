import { Component, Input, SimpleChanges } from '@angular/core';
import { BlockChainAPIBalanceResponse, BlockChainAPIService } from '../services/block-chain-api.service';
import { LoggerService } from '../services/logger.service';


// Etherium
const WEI = 1000000000000000000

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
  providers: [BlockChainAPIService, LoggerService]
})
export class BalanceComponent {
  @Input() walletAddress: any
  balance!: number

  constructor(private logger: LoggerService, private blockChainService: BlockChainAPIService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.walletAddress.currentValue) {
      this.blockChainService.getBalance(changes.walletAddress.currentValue).subscribe((response: any) => {
        this.balance = response?.result / 1000000000000000000
        this.logger.info(`getBalance response ${JSON.stringify(response)}`)
      })
    }
  }
}
