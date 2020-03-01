//定义轮播图的类型 需要的是什么数据
export type Banner = {
    targetId:number;
    url:string;
    imageUrl:string;
}

//热门标签
export type HotTag = {
    id:number;
    name:string;
    position:number;
}

// 热门推荐歌单
export type SongSheet = {
    id:number;
    name:string;
    picUrl:string;
    playCount:number;

}

//注入歌手
export type Singer = {
    id:number;
    name:string;
    picUrl:string;
    albumSize:number;

}

