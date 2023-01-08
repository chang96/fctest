import { Injectable } from '@nestjs/common';
import { Addon } from '../models/addon';
import { Category } from "../models/category";
import { Brand } from "../models/brand";

@Injectable()
export class AddonServices {
  async createAddons(details, brand): Promise<Addon> {
    try {
        const {brandId} = brand
        const brandFound =  await Brand.query().where('id', '=', brandId).first()
        if(!brandFound){
            let hopefullyRandom = `foodcourt-${Math.ceil(Math.random()*Math.random()*1000)}`
            let newBrand = await Brand.query().insert({name: hopefullyRandom})
            const created = await Addon.query().insert({...details, brand_id: newBrand.$id()});
            return created
        }
        const created = await Addon.query().insert({...details, brand_id: brandFound.$id()});
        return created
    } catch (error) {
        throw {Error: error}
    }
  }

  async getAddons(id, brandId): Promise<Addon|Addon[]> {
    try {
        if(!id){
            const addon = await Addon.query().
            where("brand_id", "=", brandId)
            return addon 
        } 
        const addon = await Addon.query().
        where("id", "=", id).
        andWhere("brand_id", "=", brandId).
        first()
        return addon 
    } catch (error) {
        throw {Error: error}
    }
  }

  async patchAddon(brandId, addonId, body){
    try {
        let findingAddon = await Addon.query().findOne({"id": addonId, "brand_id": brandId})
        let addonUpated = await findingAddon.$query().patchAndFetch({
            ...body
        })
        return addonUpated
    } catch (error) {
        throw {
            Error: error
        }
    }
}

async deleteAddon(brandId, addonId){
    try {
        let findingAddon = await Addon.query().findOne({"id": addonId, "brand_id": brandId});
        let addonDeleted = await findingAddon.$query().delete();
        return addonDeleted
    } catch (error) {
        throw {
            Error: error
        }
    }
}

async createCategory(brandId, details): Promise<Category>{
    try {
        const brandFound =  await Brand.query().where('id', '=', brandId).first()
        if(!brandFound){
            let hopefullyRandom = `foodcourt-${Math.ceil(Math.random()*Math.random()*1000)}`
            let newBrand = await Brand.query().insert({name: hopefullyRandom})
            const created = await Category.query().insert({...details, brand_id: newBrand.$id()});
            return created
        }
        const created = await Category.query().insert({...details, brand_id: brandFound.$id()});
        return created
    } catch (error) {
        throw {
            Error: error
        }
    }
}
}
