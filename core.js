Vue.component('app-li-hobby', {
    props:['item'],
    template: ('<li class="collection-item" v-on:click="itemClicked">{{ item.description }}</li>'),
    methods:{
        itemClicked(){
            this.$emit('itemclicked', this.item)
        }
    }
});

new Vue({
    el:"#app",
    data: {
        list: [{ description: 'Play basketball', id: _.uniqueId(), deleted: false}],
        newHobby: '',
        itemRemovido: null,
        newHobbyError: false,
        labelNumber: 'Number of hobby'
    },
    methods: {
        addHobby(){
            if(this.newHobby != ""){
                this.newHobbyError = false;
                var obj = {
                    id: _.uniqueId(),
                    description: this.newHobby,
                    deleted: false
                }
                this.list.push(obj);
                this.newHobby = '';
            }
            else {
                this.newHobbyError = true;
            }

            this.labelNumber = this.fixLabelNumber();
        },
        itemWasClicked(item){
            this.hobbyClicked(item.id);
        },
        hobbyClicked(id){
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
            this.itemRemovido = item;
            this.labelNumber = this.fixLabelNumber();
        },
        displayItem(){
            return (this.itemRemovido != null ? 'block' : 'none');
        },
        getClass(){
            return (this.list.length > 3 ? 'red_class' : 'green_class');
        },
        hasError(){
            return(this.newHobbyError ? 'invalid' : '');
        },
        fixLabelNumber(){
            return this.list.length > 1 ? 'Numbers of hobbies' : 'Number of hobby'
        }
    }
})