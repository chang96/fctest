const up = function (knex){
    return knex.schema.createTable("brands", (table)=>{
        table.increments("id");
        table.string("name").notNullable();
        table.timestamps(true, true);
    }).createTable("categories", (table)=>{
        table.increments("id").primary();
        table.string("name");
        table.integer("brand_id").unsigned().references("brands.id");
    }).createTable("addons", (table)=> {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("price").notNullable();
        table.string("category");
        table.string("description");
        table.integer("brand_id").unsigned().references("brands.id");
        table.integer("category_id").unsigned().references("categories.id")
    })
}


const down = function(knex){
    return knex.schema.dropTableIfExists("addons").dropTableIfExists("categories").dropTableIfExists("brands")
}


export {
    up,
    down
}