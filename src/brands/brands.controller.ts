import { Controller, Get, Post, Param, Body, Patch, Delete } from "@nestjs/common";
import { get } from "http";
import { AddonServices } from "./brands.service";

@Controller("brands/:brandId/addons")
export class Brands {
    constructor(private readonly AddonServices: AddonServices){
        
    }
    @Get()
    async getAddons(
        @Param("brandId") brandId: string,
    ): Promise<{}|[]> {
        try {
            let addon = await this.AddonServices.getAddons(undefined, brandId)
            return addon? addon : []
        } catch (error) {
            return {
                Error: error
            }
        }
    }

    @Get(":addonId")
    async getAnAddon(
        @Param("addonId") addonId: string,
        @Param("brandId") brandId: string
    ): Promise <{}>{
        try {
            let addon = await this.AddonServices.getAddons(addonId, brandId)
            return addon? addon : []
        } catch (error) {
            return {
                Error: error
            }
        }
         
    }

    @Post()
    async createAddon(
        @Param("brandId") brandId: number,
        @Body() body: {name: string, description: string, price: string, category: string}
        
        ): Promise<{}> {
        try {
            let createdAddon = await this.AddonServices.createAddons({...body}, {brandId: Number(brandId)})
            return createdAddon
        } catch (error) {
            return {
                Error: error
            }
        }
    }
    

    @Patch(":addonId")
    async patchAnAddon(
        @Param("brandId") brandId: string,
        @Param("addonId") addonId: string,
        @Body() body: {}
    ): Promise<{}> {
        try {
            let patchedAddon = await this.AddonServices.patchAddon(brandId, addonId, body)
            return patchedAddon
        } catch (error) {
            return {
                Error: error
            }
        }
    }

    @Delete(":addonId")
    async deleteAnAddon(
        @Param("brandId") brandId: string,
        @Param("addonId") addonId: string,
    ): Promise<any>{
        try {
            let deleting = await this.AddonServices.deleteAddon(brandId, addonId)
            return {"deletedRows": deleting}
        } catch (error) {
            return {Error: error}
        }
    }
    
}


@Controller("brands/:brandId/addon-categories")
export class Category {
    constructor(private readonly AddonServices: AddonServices){}
    @Post()
    async createCategory(
        @Param("brandId") brandId :string,
        @Body() body :any
    ): Promise<{}> {
        try {
            return this.AddonServices.createCategory(brandId, body)
        } catch (error) {
            return {
                Error: error
            }
        }
    }
}