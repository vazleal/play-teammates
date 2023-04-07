import cuid from 'cuid'

export abstract class Entity<T> {
  protected readonly _id: string
  public readonly props: T

  constructor(props: T, id?: string) {
    this._id = id ?? cuid()
    this.props = props
  }

  public get id(): string {
    return this._id
  }
}
