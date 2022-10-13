


const productos = [

    { id:'1',
    category: 'budines',
budin: 'Venus',
sabor: 'Cacao y banana',
precio: 1500,
imagen:'https://d320djwtwnl5uo.cloudfront.net/recetas/cover/budin_yNWSiKvFJc6xIqAV5m9Tb8nsZoCBRP.png' ,
descripción: 'La combinación de cacao y banana, nos ofrece dulzura, intensidad y armonia',
ingredientes: 'Harina de avena, azúcar mascabo, huevo, banana, cacao y manzana',
stock: 4

},

{ id:'2',
category: 'budines',
budin: 'Gea',
sabor: 'Coco',
precio: 1200,
imagen: './IMG/Reccoco.png',
descripción: 'El coco nos ofrece la energía de la tierra, sanación, renovación y equilibrio',
ingredientes: 'Harina de avena, azúcar mascabo, escencia de vainilla y coco',
stock: 4

},

{ id:'3',
category: 'budines',
budin: 'Poseidon',
sabor: 'Frutos rojos y vainilla',
precio: 1600,
imagen: './IMG/RecFr.png',
descripción: 'La combinación vainilla y frutos rojos nos ofrece la energía del agua, calma y frescura.',
ingredientes: 'Harina de arroz, azúcar mascabo, escencia de vainilla y frutos rojos',
stock: 4

},

{ id:'4',
category: 'budines',
budin: 'Apollo',
sabor: 'Limon y amapolas',
precio: 1000,
imagen: './IMG/RecNar.png',
descripción: 'El sabor citrico nos ofrece la energia del fuego, intensidad y vitalidad.',
ingredientes: 'Harina de arroz, azúcar mascabo, coco, ralladura y jugo de limón, semillas de amapola',
stock: 4

},


]

/*export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
} */


export const getProduct = (id) => {

    return new Promise ((resolve) => {setTimeout(() => {


        resolve(productos.find(prod => prod.id === id))
    },1000)
    
     })
}

export const getProducts = (categoryId) => {

    return new Promise ((resolve) => {setTimeout(() => {
          resolve(categoryId ? productos.filter(prod => prod.category === categoryId) : productos)
    },1000)
    
     })
}
