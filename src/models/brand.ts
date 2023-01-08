import { Model } from 'objection';
import { Category } from './category';
import { Addon } from './addon';

export class Brand extends Model {
    static get tableName() {
      return 'brands';
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
          categories: {
            relation: Model.HasManyRelation,
            modelClass: Category,
            join: {
              from: 'brands.id',
              to: 'categories.brand_id'
            }
          },
          addons: {
            relation: Model.HasManyRelation,
            modelClass: Addon,
            join: {
              from: 'brands.id',
              to: 'addons.brand_id'
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
// brand has many categories, category belongs to one brand. each category has addon. and an addon belongs to a category
//