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



//注入歌手
export type Singer = {
    id:number;
    name:string;
    picUrl:string;
    albumSize:number;

}

//每一首歌曲的数据类型
export type Song = {
    id:number;
    name:string;
    url:string;
    ar:Singer[]; //歌手的数组
    al:{
        id:number;
        name:string;
        picUrl:string;

    };//al是这首哥专辑相关的内容
    dt:number;
}
// 热门推荐歌单数据类型
export type SongSheet = {
    id:number;
    name:string;
    picUrl:string;
    playCount:number;
    tracks:Song[];

}


//播放地址
export type SongUrl = {
    id:number;
    url:string;
}