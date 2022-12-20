//Creamos una app de Vue
const app = new Vue({

    el: '#app',
    //En el data, ingresamos nuestros datos
    data: {
        //el título que se muestra al principio de la página viene de aquí.
        titulo: 'Gym con Vue',
        //El arreglo de tareas.
        tareas:[],
        //Función que permite pasar los datos de html a javascript.
        nuevaTarea: ''
    },
    methods:{
        //función para agregar una nueva tarea.
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea='';
            //código que sirve para crear una base de datos local con las tareas.
            //la variable es gym-vue
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        //función para editar el estado de una tarea.
        editarTarea: function(index){
            this.tareas[index].estado = true;
        },
        //función para eliminar una tarea.
        eliminar: function(index){
            this.tareas.splice(index, 1);
        }
    },
    //se carga cuando se ejecuta nuestra página web.
    created: function(){
        //creamos la base de datos con JSON con la variable gym-vue
        let datosDB = JSON.localStorage.getItem('gym-vue')
        //si la BD está vacía, no se muestra nada.
        if(datosDB === null){
            this.tareas=[];
            //si la BD tiene contenido, se muestra
        }else{
            this.tareas = datosDB;
        }
    }
});