import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface BlockChainAPIBalanceResponse { status: string, message: string, result: any }

export interface BlockChainAPITxResponse { status: string, message: string, result: any }

export type TransactionType = "internal" | "external"

@Injectable({
  providedIn: 'root'
})



export class BlockChainAPIService {

  url = "https://api.etherscan.io/api"

  constructor(private http: HttpClient) { }

  getBalance(blockChainAddress: string): Observable<BlockChainAPIBalanceResponse> {
    return this.http.get<any>(this.url, {
      params: {
        module: "account",
        action: "balance",
        address: blockChainAddress,
        tag: "latest",
        apikey: import.meta.env.NG_APP_ETHERSCAN_API_KEY
      }
    })
  }

  getTransactionDetails({ blockChainAddress, txType = 'internal' }: { blockChainAddress: string, txType?: TransactionType }): Observable<BlockChainAPITxResponse> {
    return this.http.get<any>(this.url, {
      params: {
        module: "account",
        action: txType === 'internal' ? 'txlistinternal' : 'txlist',
        address: blockChainAddress,
        startblock: 0,
        endblock: txType === 'internal' ? 2702578 : 99999999,
        page: 1,
        offset: 10,
        sort: 'desc',
        apikey: import.meta.env.NG_APP_ETHERSCAN_API_KEY
      }
    })
  }

}
