import {defineStore} from "pinia";
import axios from "axios";

export const useStateStore = defineStore('StateStore', {
    state: () => ({
        list: [
            {
                id:1,
                title: 'Заголовок',
                text: 'Текст',
                price: 5000,
                image: null,
            },
            {
                id:2,
                title: 'Заголовок',
                text: 'Текст',
                price: 5000,
                image: null,
            },
            {
                id:3,
                title: 'Заголовок',
                text: 'Текст',
                price: 5000,
                image: null,
            },
        ],
    }),
    getters: {
        getList: state => state.list,
    },
    actions: {
        getProducts () {
            axios.get('http://localhost:3030/api/products')
                .then(res => {
                if (res.data.products) {
                    this.list = res.data.products
                }
            })
                .catch(err => {
                    console.log('err', err)
                })
        },
        updateProduct (product) {
            // const config = {
            //     headers: {
            //         "content-type": "multipart/form-data"
            //     }
            // };
            // axios.put('http://localhost:3030/api/products', product, config)
            //     .then(res => {
            //         if (res.data){
            //             let element = this.list.find(element => element.id === product.id);
            //             let index = this.list.indexOf(element);
            //             let arr = this.list.filter(el => el.id !== product.id);
            //             arr.splice(index, 0, {
            //                 ...res.data
            //             });
            //             this.list = arr
            //         }
            //     })

            let element = this.list.find(element => element.id === product.id);
            let index = this.list.indexOf(element);
            let arr = this.list.filter(el => el.id !== product.id);
            arr.splice(index, 0, {
                ...product
            })
            this.list = arr
        },
        addProduct (product) {
            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };
            axios.post('http://localhost:3030/api/products', product, config)
                .then(res => {
                    if (res.data){
                        let arr = [...this.list];
                        arr.push(res.data);
                        this.list = arr;
                    }
                })
        },
        removeProduct (product) {
            axios.delete(`http://localhost:3030/api/products/${product.id}`)
                .then(res => {
                    if (res.data){
                        this.list = this.list.filter(el => el !== product)
                    }
                })
        },
    }
})
