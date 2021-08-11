export const productMixin = {
    data() {
        return {
            products: ['Monitor', 'Klavye', 'Hard Disk'],
            searchText: ''
        }
    },
    computed: {
        filtered() {
            //return this.products.filter(item => item.match(this.searchText));
            return this.products.filter(item => item.toLowerCase().includes(this.searchText.toLowerCase()));
        }
    }
}