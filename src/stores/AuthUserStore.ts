import {defineStore} from 'pinia'

export const useAuthUserStore=defineStore('AuthUserStore',{
  state:()=>({
    username:'wansoo jang'
  })
})