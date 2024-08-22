import {defineStore} from "pinia";

export const useStateStore = defineStore('StateStore', {
    state: () => ({
        list: [
            {
                id:1,
                title: 'Заголовок',
                text: 'Текст',
                price: 5000,
                photo: null,
            },
            {
                id:2,
                title: 'Заголовок',
                text: 'Текст',
                price: 5000,
                photo: null,
            },
            {
                id:3,
                title: 'Заголовок',
                text: 'Текст',
                price: 5000,
                photo: null,
            },
        ],
    }),
    getters: {
        getList: state => state.list,
    },
    actions: {
        updateProduct (product) {
            let element = this.list.find(element => element.id === product.id);
            let index = this.list.indexOf(element);
            let arr = this.list.filter(el => el.id !== product.id);
            arr.splice(index, 0, {
              ...product
            })
            this.list = arr
        },
        addProduct (product) {
            let arr = [...this.list];
            arr.push({
                id: this.list.length + 1,
                ...product
            })
            this.list = arr;
        },
        removeProduct (product) {
             this.list = this.list.filter(el => el !== product)
        },
    }
})