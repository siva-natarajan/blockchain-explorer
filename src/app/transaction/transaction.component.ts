import { Component, Input } from '@angular/core';
import { BlockChainAPIService, BlockChainAPITxResponse, TransactionType } from '../services/block-chain-api.service';
import { LoggerService } from '../services/logger.service';
import { SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  providers: [LoggerService, BlockChainAPIService]
})
export class TransactionComponent {
  @Input()
  walletAddress: any;
  @Input()
  txType: any;

  txData!: BlockChainAPITxResponse;
  isError: boolean

  objectKey = Object.keys
  jsonStringify = JSON.stringify

  constructor(private logger: LoggerService, private blockChainService: BlockChainAPIService) {
    this.isError = false
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes?.walletAddress?.currentValue)
    // if (changes?.walletAddress?.currentValue) {
    this.blockChainService.getTransactionDetails({ blockChainAddress: changes.walletAddress.currentValue, txType: this.txType }).subscribe((response: any) => {
      this.logger.info(`get ${this.txType} Transaction response ${JSON.stringify(response)}`)
      this.txData = response
      this.logger.info(`getTransaction response ${JSON.stringify(response)}`)
      this.isError = typeof this.txData.result === "string" || this.txData.result.length < 1
    })
    // }
  }

}
