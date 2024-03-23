export interface InputValues {}
export interface OutputValues {}

export abstract class UseCase<I extends InputValues, O extends OutputValues> {
  public abstract execute(input: I): O;
}
