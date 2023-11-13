const app = Vue.createApp({
    data() {
        return {
            prespective: 100,
            xRotation: 0,
            yRotation: 0,
            zRotation: 0,
        }
    },
    computed: {
        box() {
            return {
                transform: `perspective(${this.prespective}px) rotateX(${this.xRotation}deg) rotateY(${this.yRotation}deg) rotateZ(${this.zRotation}deg)`
            }
        }
    },
    methods: {
        reset() {
            this.prespective = 100;
            this.xRotation = 0;
            this.yRotation = 0;
            this.zRotation = 0;
        },
        async copy() {
            let text = `transform: ${this.box.transform};`;
            await navigator.clipboard.writeText(text);

            alert('Copied to clipboard');
        }
    },
}).mount('#app')