/* Vue Slider */

const app = new Vue({
    el: "#app",
    data: {
        images: [
            "https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g",
            "https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo",
            "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
            "https://i.picsum.photos/id/1044/4032/2268.jpg?hmac=BXmoMkaurlzpTLYQupXLipcmI1sFbgT5sIz98Ob5VZE",
        ],

        indexImage: 0,
        intervalId: 0,
    },

    created() {
        this.startLoop()
    },

    methods: {

        prevImage() {
            this.indexImage--;
            if (this.indexImage < 0) {
                this.indexImage = this.images.length - 1
            }

        },

        nextImage() {
            this.indexImage++;

            if (this.indexImage > (this.images.length - 1)) {
                this.indexImage = 0;
            }
        },

        setImage(index) {
            this.indexImage = index;
        },

        startLoop() {
            this.intervalId = setInterval(() => {

                this.nextImage();
            }, 3000)
        },
        stopLoop() {

            clearInterval(this.intervalId);
        }
    }
})