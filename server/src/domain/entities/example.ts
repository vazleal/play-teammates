import { Entity } from '@/core/domain/entity'

import { type Replace } from '@/core/logic/replace'

export interface ExampleProps {
  message: string
  createdAt: Date
  updatedAt: Date
}

export class Example extends Entity<ExampleProps> {
  constructor(
    props: Replace<ExampleProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string
  ) {
    super(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date()
      },
      id
    )
  }

  public update(): void {
    this.props.updatedAt = new Date()
  }

  public get message(): string {
    return this.props.message
  }

  public set message(message: string) {
    this.props.message = message
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }

  public get updatedAt(): Date {
    return this.props.updatedAt
  }
}
