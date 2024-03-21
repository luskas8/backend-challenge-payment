import { Transaction } from '../entities/Transaction.js';

export abstract class TransactionRepository {
  abstract save(transaction: Transaction): Transaction;
  abstract list(): Promise<Transaction[]>;
  abstract getByUserId(id: string): Transaction[];
}
