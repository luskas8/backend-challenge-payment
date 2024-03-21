import { randomUUID as uuid } from 'crypto';

export class Transaction {
  id: string;
  client_id: number;
  client_name: string;
  total_to_pay: number;
  credit_card: {
    card_number: string;
    value: number;
    cvv: number;
    exp_date: string;
  };
  created_at: Date;

  private constructor(args: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.client_id = args.client_id;
    this.client_name = args.client_name;
    this.total_to_pay = args.total_to_pay;
    this.credit_card = args.credit_card;
    this.created_at = new Date();
  }

  create(args: Omit<Transaction, 'id'>): Transaction {
    // create transaction
    return new Transaction(args);
  }
}
