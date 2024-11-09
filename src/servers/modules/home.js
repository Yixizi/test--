import xRequest from '@/servers/request'

export const getHomeGoodPriceData=()=>{
    return xRequest.get({
        url:'/home/goodprice'
    })
}

export const getHomeHighScoreData=()=>{
    return xRequest.get({
        url:'/home/highscore'
    })
}
export const getHomeDiscountData=()=>{
    return xRequest.get({
        url:'/home/discount'
    })
}
export const getHomeHotRecommendData=()=>{
    return xRequest.get({
        url:'/home/hotrecommenddest'
    })
}
export const getHomeLongforData=()=>{
    return xRequest.get({
        url:'/home/longfor'
    })
}
export const getHomePlusData=()=>{
    return xRequest.get({
        url:'/home/plus'
    })
}