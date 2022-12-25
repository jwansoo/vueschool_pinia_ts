import { useLocalStorage } from '@vueuse/core';
import { defineStore,acceptHMRUpdate } from "pinia";
import type { Product } from "@/types/Product";
import {groupBy} from 'lodash'
import {useAuthUserStore} from './AuthUserStore'
export const useCartStore=defineStore('CartStore',{
  historyEnabled:true,
  state:()=>({
    count:0,
    items:useLocalStorage('cartStore:items',[]),
    grouped:[] as Product[],
    groupCount:Number,
    test:'hello world'
    
  }),
  getters:{
    count:(state)=>state.items.length,
    isEmpty:(state)=>state.count===0,
    grouped:(state)=>{
      const grouped=groupBy(state.items, (item)=>item.name)
      const sorted=Object.keys(grouped).sort()
      let inOrder={} as Product[]
      sorted.forEach((key)=>(inOrder[key]=grouped[key]))
      return inOrder
    },
    groupCount:(state)=>(name:string)=>state.grouped[name].length,
    total:(state)=>state.items.reduce((p,c)=>p+c.price,0)
    },
  
  actions:{
   addItems(count:any,item:Product){
       count=parseInt(count)
       for(let index=0;index<count;index++){
        this.items.push({...item})
      }
    },
    clearItem(itemName:string){
      this.items=this.items.filter((item)=>item.name !==itemName)
    },
    setItemCount(item:Product,count:number){
      this.clearItem(item.name)
      this.addItems(count,item)
    },
    checkout(){
      const authUserStore=useAuthUserStore()
      alert(`${authUserStore.username} just bought ${this.count} items at a total of $${this.total}`)
    }
  }
})
if(import.meta.hot){
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}