import { defineStore } from "pinia";
import type { Product } from "@/types/Product";

export const useProductStore=defineStore('ProductStore',{
  state:()=>({
    products:[] as Product[]
  }),
  actions:{
     async fill(){
      this.products=(await import('../data/products.json')).default
     }

    }
  
})