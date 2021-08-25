<template>
    <div id="user-detail">
        <div id="user-info">
            <h2>Me</h2>
            <div>
                <label>User Info:</label>
                <pre>{{user}}</pre>
            </div>
        </div>
        <div id="user-fav">
            <h1>Video List</h1>
            <div :key="idx" v-for="(d, idx) in cards">
                <b-card
                    :title=d.title
                    :img-src=d.src
                    :img-alt=d.alt
                    :tag=d.tag
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                <b-card-text>{{d.description}}</b-card-text>
                </b-card>
                
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user : {
                name: "kang",
                gender : "male",
                email: "lotte@example.com",
                phone: "010-1234-5678"
            },
            cards: [
                {
                    title: "Card Title",
                    src: "https://picsum.photos/600/300/?image=25",
                    alt: "Image",
                    tag: "article",
                    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
                }
            ]
        }
    }
}
</script>