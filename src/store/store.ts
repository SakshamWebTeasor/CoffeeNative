import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CoffeeData from "../data/CofeeData";
import BeansData from "../data/BeansData";

export const useStore = create(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            BeanList: BeansData,
            FavouritesList: [],
            CartList: [],
            OrderHistoryList: [],
            CartPrice: 0,
            addToCart: ((cartItem: any) => set(produce(state => {
                let found = false;
                for (let i = 0; i < state.CartList.length; i++) {
                    if (state.CartList[i].id == cartItem.id) {
                        found = true;
                        let size = false;
                        for (let j = 0; j < state.CartList[i].size.length; j++) {
                            if (state.CartList[i].prices[j].size == cartItem.prices[0].size) {
                                size = true;
                                state.cartList[i].prices[j].quantity++;
                                break;
                            }
                        }
                        if (!size) {
                            state.CartList[i].prices.push(cartItem.prices[0]);
                        }
                        state.CartList[i].prices.sort((a: any, b: any) => a.size - b.size);
                        break;
                    }
                }
                if (!found) {
                    state.CartList.push(cartItem);
                }
            }))),
            calculateCartPrice: () => set(produce(state => {
                let totalPrice = 0;
                for (let i = 0; i < state.CartList.length; i++) {
                    let tempPrice = 0;
                    for (let j = 0; j < state.CartList[i].prices.length; j++) {
                        tempPrice += parseFloat(state.CartList[i].prices[j].price) * state.CartList[i].prices[j].quantity;
                    }
                    state.CartList[i].itemPrice = tempPrice.toFixed(2).toString();
                    totalPrice += tempPrice;
                }
                state.CartPrice = totalPrice.toFixed(2).toString();
            })),
            addToFavoriteList: (type: string, id: string) => set(produce(state => {
                if (type == "Coffee") {
                    for (let i = 0; i < state.CoffeeList.length; i++) {
                        if (state.CoffeeList[i].id == id) {
                            if (!state.CoffeeList[i].favourite) {
                                state.CoffeeList[i].favourite = true;
                                state.FavouritesList.unshift(state.CoffeeList[i]);
                            }
                            break;
                        }
                    }
                } else if (type == "Bean") {
                    for (let i = 0; i < state.BeanList.length; i++) {
                        if (state.BeanList[i].id == id) {
                            if (!state.BeanList[i].favourite) {
                                state.BeanList[i].favourite = true;
                                state.FavouritesList.unshift(state.BeanList[i]);
                            }
                            break;
                        }
                    }
                }
            })),
            deleteFromFavoriteList: (type: string, id: string) => set(produce(state => {
                if (type == "Coffee") {
                    for (let i = 0; i < state.CoffeeList.length; i++) {
                        if (state.CoffeeList[i].id == id) {
                            state.CoffeeList[i].favourite = false;
                            break;
                        }
                    }
                } else if (type == "Bean") {
                    for (let i = 0; i < state.BeanList.length; i++) {
                        if (state.BeanList[i].id == id) {
                            state.BeanList[i].favourite = false;
                            break;
                        }
                    }
                }
                let spliceIndex = -1;
                for (let i = 0; i < state.FavouritesList.length; i++) {
                    if (state.FavouritesList[i].id == id) {
                        spliceIndex = i;
                        break;
                    }
                }
                if (spliceIndex != -1) {
                    state.FavouritesList.splice(spliceIndex, 1);
                }
            }))
        }), {
        name: "coffee-app", storage: createJSONStorage(() => AsyncStorage)
    }
    )
)