<template>
    <div id="user-detail">
        <div id="user-info">
            <h2>Me</h2>
            <div>
                <h3>User Info:</h3>
                <h4>{{data.username}}</h4>
                
            </div>
        </div>
        <div id="user-fav">
            <h2>Video List</h2>
            <b-row>
                <b-card-group class="col-md-2" :key="idx" v-for="(video, idx) in data.videos">
                    <a :href=video.fileUrl style="color: black; text-decoration: none; height: 100%; width: 100%;">
                        <b-card :title=video.title
                        :img-src=video.thumbnailUrl
                        img-alt="Image"
                        tag="article"
                        style="height: 100%;"
                        >
                        <!-- <b-card-text>{{video.description}}</b-card-text> -->
                        </b-card>
                    </a>
                </b-card-group>
            </b-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data : {
                username: "Yeonwook",
                videos: [
                    {
                        "videoId": "hQrEGhOjgUg",
                        "fileUrl": "https://www.youtube.com/embed/hQrEGhOjgUg",
                        "thumbnailUrl": "https://i.ytimg.com/vi/hQrEGhOjgUg/default.jpg",
                        "title": "[PLAYLIST] IU Song",
                        "description": "",
                        "platform": "youtube",
                        "userId": 3
                    },
                    {
                        "videoId": "wDfqXR_5yyQ",
                        "fileUrl": "https://www.youtube.com/embed/wDfqXR_5yyQ",
                        "thumbnailUrl": "https://i.ytimg.com/vi/wDfqXR_5yyQ/default.jpg",
                        "title": "[4K][Special] IU - Killing Voice",
                        "description": "",
                        "platform": "youtube",
                        "userId": 3
                    }
                    ,
                    {
                        "videoId": "0-q1KafFCLU",
                        "fileUrl": "https://www.youtube.com/embed/0-q1KafFCLU",
                        "thumbnailUrl": "https://i.ytimg.com/vi/0-q1KafFCLU/default.jpg",
                        "title": "[MV] IU _ Celebrity",
                        "description": "",
                        "platform": "youtube",
                        "userId": 3
                    },
                    {
                        "videoId": "MwYq4vAH7bI",
                        "fileUrl": "https://www.youtube.com/embed/MwYq4vAH7bI",
                        "thumbnailUrl": "https://i.ytimg.com/vi/MwYq4vAH7bI/default.jpg",
                        "title": "Best Songs of IU Playlist",
                        "description": "",
                        "platform": "youtube",
                        "userId": 3
                    },
                    {
                        "videoId": "v7bnOxV4jAc",
                        "fileUrl": "https://www.youtube.com/embed/v7bnOxV4jAc",
                        "thumbnailUrl": "https://i.ytimg.com/vi/v7bnOxV4jAc/default.jpg",
                        "title": "[MV] IU_LILAC",
                        "description": "",
                        "platform": "youtube",
                        "userId": 3
                    },
                    {
                        "videoId": "mrBwXXj0p34",
                        "fileUrl": "https://www.youtube.com/embed/mrBwXXj0p34",
                        "thumbnailUrl": "https://i.ytimg.com/vi/mrBwXXj0p34/default.jpg",
                        "title": "IKMU",
                        "description": "",
                        "platform": "youtube",
                        "userId": 3
                    }
                ]
            }
        }
    },
    computed: {
      formattedCards() {
          return this.data.cards.reduce((c, n, i) => {
              if (i % 4 === 0) c.push([]);
              c[c.length - 1].push(n);
              return c;
          }, []);
      }
  }
}
</script>