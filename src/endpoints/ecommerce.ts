import { fetchData } from "./core"

export const getBanners = ((callback: { callback: (data: any) => void }) => {
    const url = "https://api.testvalley.kr/main-banner/all"
    fetchData(url)
    .then(data => {
		callback(data)
    });
}

export const getCategories = (callback: { callback: (data: any) => void }) => {
    const url = "https://api.testvalley.kr/main-shortcut/all"
    fetchData(url)
    .then(data => {
		callback(data)
    });
}

export const getCollections = (callback: { callback: (data: any) => void }) => {
    const url = "https://api.testvalley.kr/collections?prearrangedDiscount"
    fetchData(url)
    .then(data => {
        const newData = data.items.filter(item => {
            return item.type === "SINGLE" && item.viewType === "TILE"
        })
        callback(newData)
    });
}