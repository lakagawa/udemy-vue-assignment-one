Vue.component('app-li-hobby', {
    props:['item'],
    template: ('<li>{{ item.description }}</li>'),
    methods:{
        
    }
});

new Vue({
    el:"#app",
    data: {
        list: [{ description: 'Play basketball', id: _.uniqueId(), deleted: false}],
        newHobby: '',
        itemRemovido: null,
        counter: 1
    },
    methods: {
        addHobby(){
            if(this.newHobby != ""){
                var obj = {
                    id: _.uniqueId(),
                    description: this.newHobby,
                    deleted: false
                }
                this.list.push(obj);
                this.counter = this.list.length;
                this.newHobby = '';
            }
        },
        hobbyClicked(id){
            debugger;
            var item = null;
            var lista = this.list.filter(function(el){
                if(el.id == id){
                    item = el; 
                }
                return el.id != id;
            });

            if(lista == undefined || lista == null){
                lista = [];
            }
           
            this.list = lista;
            this.counter = this.list.length;
            this.itemRemovido = item;
        },
        displayItem(){
            return (this.itemRemovido != null ? 'block' : 'none');
        },
        getClass(){
            return (this.list.length > 3 ? 'red_class' : 'green_class');

        }
    }
})