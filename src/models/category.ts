import { Model } from 'objection';
import { Brand } from './brand';
import { Addon } from './addon';
export class Category extends Model {
    static get tableName() {
      return 'categories';
    }
    static get jsonSchema(){
        return {
            type:'object',
            required: ['name'],
            properties: {
                 id: {type: 'integer'},
                name: { type : 'string'},
             
            }
        }
    }

  static get relationMappings() {
    return {
      brand: {
        relation: Model.BelongsToOneRelation,
        modelClass: Brand,
        join: {
          from: 'categories.brand_id',
          to: 'brands.id'
        }
      },
      addons: {
        relation: Model.HasManyRelation,
        modelClass: Addon,
        join: {
          from: 'categories.id',
          to: 'addons.category_id'
        }
      }
    };
  }
  }


//   Addons.knex.schema.createTable(Addons.tableName, (table) => {
//     table.string('name').notNullable();
//     table.string('price').notNullable();
//   }).then(() => console.log(`Table ${Addons.tableName} created!`))
//     .finally(() => Addons.knex.destroy());
