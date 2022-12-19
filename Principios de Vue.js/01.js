//Se comienza con el nombre del div, seguido de new Vue
const app = new Vue({
    //colocamos el nombre del div
    el: '#app',
    //creamos los datos que vamos a pasar, titulo es
    //para mostrar un mensaje, frutas es un arreglo.
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre:'Pera', cantidad:10},
            {nombre:'Manzana', cantidad:0},
            {nombre:'Platano', cantidad:15}
            ],
            //es el evento que viene por medio del v-model
            nuevaFruta: '',
            total: 0
    },
    //con methods creamos funciones
    methods:{
        //empezamos agregando la función que escribe nuevas frutas.
        agregarFruta () {
            //hacemos un push para mandar los datos
            this.frutas.push({
                //colocamos los datos en orden.
                nombre: this.nuevaFruta, cantidad: 0
            });
            //evento que vacía la textbox
            this.nuevaFruta = ''
        }
    },
    //Los computed sirven para ser afectados en tiempo de ejecución
    computed: {
        sumarFrutas() {
            //Se comienza con un valor inicial.
            this.total = 0;
            //Se recorre todo el array para sumar sus cantidades, incluso las nuevas.
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total
        }
    }
})