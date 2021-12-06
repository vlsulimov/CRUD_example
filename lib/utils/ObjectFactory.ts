import { Model, ModelCtor } from 'sequelize-typescript';

export abstract class ObjectFactory<T extends Model> {
  private model: ModelCtor;

  private sample: Record<string, any>;

  constructor(model: ModelCtor, sample: Record<string, any>) {
    this.model = model;
    this.sample = sample;
  }

  async create(objectFields: Partial<T> = {}): Promise<T> {
    const createdObject = await this.model.create({
      id: 100,
      ...this.sample,
      ...objectFields,
    });

    return createdObject.get({ plain: true }) as T;
  }

  async bulkCreate(count: number, objectsFields: Partial<T>[] = []): Promise<T[]> {
    const objectsToCreate: Partial<T>[] = Array(count)
      .fill(this.sample)
      .map((object, index) => ({
        id: 100 + index,
        ...object,
        ...(objectsFields[index] || {}),
      }));

    return (await this.model.bulkCreate(objectsToCreate, { returning: true })).map(x =>
      x.get({ plain: true })
    ) as T[];
  }
}
