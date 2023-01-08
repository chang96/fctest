import { Model } from 'objection';
import { Brand } from './brand';
import { Category } from './category';

export class Addon extends Model {
    static get tableName() {
      return 'addons';
    }
    static get jsonSchema(){
        return {
            type:'object',
            required: ['name', 'price'],
            properties: {
                id: {type: 'integer'},
                name: { type : 'string'},
                price: { type: 'string'},
                description: { type: 'string' },
                category: { type : 'string'},
            }
        }
    }

    static get relationMappings() {
      return {
        brand: {
          relation: Model.BelongsToOneRelation,
          modelClass: Brand,
          join: {
            from: 'addons.brand_id',
            to: 'brands.id'
          }
        },
        category: {
          relation: Model.BelongsToOneRelation,
          modelClass: Category,
          join: {
            from: 'addons.category_id',
            to: 'categories.id'
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
