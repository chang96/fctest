import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex.raw('TRUNCATE TABLE "brands" CASCADE');
    await knex.raw('TRUNCATE TABLE "categories" CASCADE')
    await knex.raw('TRUNCATE TABLE "addons" CASCADE')

    // // Deletes ALL existing entries
    // await knex("table_name").del();

    // // Inserts seed entries
    // await knex("table_name").insert([
    //     { id: 1, colName: "rowValue1" },
    //     { id: 2, colName: "rowValue2" },
    //     { id: 3, colName: "rowValue3" }
    // ]);

    await knex("brands").insert([
        {
            id:1,
            name: "brand1"
        }
    ])

    await knex("categories").insert([
        {
            id:1,
            name: "category1"
        }
    ])

    await knex("addons").insert([
        {
            id:1,
            name: "brand1",
            price:"100 uds",
            category:"",
            description:""
        }
    ])
};


