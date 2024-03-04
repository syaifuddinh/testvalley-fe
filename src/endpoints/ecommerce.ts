import { fetchData } from "./core"

export const getBanners = ((callback: any) => {
    const url = "https://api.testvalley.kr/main-banner/all"
    fetchData(url)
    .then(data => {
		callback(data)
    });
}

export const getCategories = (callback: any) => {
    const url = "https://api.testvalley.kr/main-shortcut/all"
    fetchData(url)
    .then(data => {
		callback(data)
    });
}

export const getCollections = (callback: any) => {
    const url = "https://api.testvalley.kr/collections?prearrangedDiscount"
    fetchData(url)
    .then((data: any) => {
        const newData = data.items.filter(item => {
            return item.type === "SINGLE" && item.viewType === "TILE"
        })
        callback(newData)
    });
}