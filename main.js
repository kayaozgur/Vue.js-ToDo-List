var app = new Vue({
    el: '#app',
    data: {

        textbar: '',
        liste: [],
        tamamlananlar: []
    },
    
        methods: {
        ekle(e) {
            e.preventDefault();
            this.liste.push(this.textbar);
            this.textbar = '';
        },

        listedenSil(index) {
            this.liste.splice(index, 1);
        },

        tamamlananSil(index) {
            this.tamamlananlar.splice(index, 1);
        },

        tamamla(index) {
            const item = this.liste.splice(index, 1);
            this.tamamlananlar.push(item[0]);
        },

        geriAl(index) {
            const item = this.tamamlananlar.splice(index, 1);
            this.liste.push(item[0]);
        }
    }


});