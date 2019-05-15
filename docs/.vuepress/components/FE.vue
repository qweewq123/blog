<template>
    <div class="fe" v-loading="loading">
        <!-- github info -->
        <div class="github">
            <div class="github-title">
                <el-card shadow="always">
                    github<span class="title-info">最受欢迎js项目(实时)</span>
                </el-card>
             </div>
            <div class="github-main" v-for="item in list">
                <div class="github-img"><img :src="item.avatar_url" alt="" class="img-style"></div>
                <div class="github-content">
                    <a class="github-url" :href="item.html_url">
                        {{item.full_name}}
                    </a>
                    <div class="github-info">{{item.description}}</div>
                    <div class="github-user">
                        <div class="github-stars"><i class="el-icon-star-on"></i>{{item.stargazers_count}}</div>
                        <div class="github-fork"><i class="el-icon-share"></i>{{item.forks_count}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Axios from 'axios'
export default {
    data () {
        return {
            list: [],
            loading: true
        }
    },
    created () {
        this.$http.get('https://api.github.com/search/repositories?q=language:javascript&sort=stars').then(res => {
            let result = res.data;
            this.list = [];
            for (let i = 0; i < result.items.length; i++) {
                this.list.push ({
                    avatar_url: result.items[i].owner.avatar_url,
                    description: result.items[i].description,
                    full_name: result.items[i].full_name,
                    stargazers_count: result.items[i].stargazers_count,
                    forks_count: result.items[i].forks_count,
                    html_url: result.items[i].html_url
                })
                this.loading = false;               
            }
        })
    }
}
</script>

<style>
.fe {
    background-color: #c2c5cd;
    padding: 10px; 
}
.github-title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
}
.title-info {
    margin-left: 25px;
}
.github-main {
    height: 120px;
    padding: 24px 30px;
    margin-bottom: 10px;
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
}
.github-img {
    width: 48px;
    height: 48px;
    margin-right: 15px;
    float: left;
}
.img-style {
    width: 48px;
    height: 48px;
}
.github-content {
    float: left;
    width: 580px;
}
.github-url {
    color: #46bd87;
    font-weight: bold;
}
.github-info {
    margin-top: 20px;
}
.github-user {
    margin-top: 30px;
    overflow: hidden;
}
.github-stars, .github-fork{
    float: left;
    margin-right: 10px;
}
</style>
