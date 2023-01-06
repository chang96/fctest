import { Controller, Get, Post, Param, Body, Patch, Delete } from "@nestjs/common";

@Controller("brands/:brandId/addons")
export class Brands {
    @Get()
    getAddons(
        @Param("brandId") brandId: string,
    ): string[] {
        return ["", "", brandId]
    }

    @Get(":addonId")
    getAnAddon(
        @Param("addonId") addonId: string
    ): {name: string, description: string, price, category:string}{
        return {name: addonId, description:"ofada ni", price:"100", category:"rice"}
    }

    @Post()
    createAddon(
        @Param("brandId") brandId: string,
        @Body() body: {name: string, description: string, price: string, category: string}
        
        ): string {
        return "Addon Created";
    }

    @Patch()
    patchAnAddon(
        @Param("brandId") brandId: string,
        @Body() body: {}
    ): {} {
        return {}
    }

    @Delete()
    deleteAnAddon(): {}{
        return {}
    }
    
}


@Controller("brands/:brandId/addon-categories")
export class Category {
    @Post()
    createCategory(
        @Body() body: any
    ): string {
        return ""
    }
}