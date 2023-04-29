const products = [
    {
        id: '1',
        name: 'Iphone12',
        price: 1000,
        category: 'telefonos',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QoI3719fLH7sCbLrvS1lskIBpa3J_LP0IpTyVv8c6Rg7XukyvcHzUXFaZhWY5He-Nfk&usqp=CAU',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung Galaxy S21',
        price: 900,
        category: 'telefonos',
        img: 'https://lezamapc.com.ar/38007-large_default/celular-samsung-galaxy-s21-fe-6gb-128gb-graphite.jpg',
        stock: 15,
        description: 'Descripción de Samsung Galaxy S21'
      },
      {
        id: '3',
        name: 'iPad Air',
        price: 700,
        category: 'tablets',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-202009_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1598914971000',
        stock: 10,
        description: 'Descripción de iPad Air'
      },
      {
        id: '4',
        name: 'Samsung Galaxy Tab S7',
        price: 600,
        category: 'tablets',
        img: 'https://www.manual.ar/thumbs/products/l/1260236-samsung-galaxy-tab-s7.jpg',
        stock: 20,
        description: 'Descripción de Samsung Galaxy Tab S7'
    },
    {
        id: '5',
        name: 'iPad Pro',
        price: 1200,
        category: 'tablets',
        img: 'https://stylewatch.vtexassets.com/arquivos/ids/201755-800-800?v=637708773190130000&width=800&height=800&aspect=true',
        stock: 5,
        description: 'Descripción de iPad Pro'
    },
    {
        id: '6',
        name: 'Macbook Pro',
        price: 2000,
        category: 'notebooks',
        img: 'https://stylewatch.vtexassets.com/arquivos/ids/205169-800-800?v=637742239441700000&width=800&height=800&aspect=true',
        stock: 10,
        description: 'Descripción de Macbook Pro'
    },
    {
        id: '7',
        name: 'Lenovo ThinkPad X1 Carbon',
        price: 1500,
        category: 'notebooks',
        img: 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen8-subseries-gallery-1.jpg?context=bWFzdGVyfHJvb3R8NDgwODZ8aW1hZ2UvanBlZ3xoOGQvaDYyLzEwNjc0NTg1OTkzMjQ2LmpwZ3wxMGE4MDVlNWJmOGM1Y2IzYjQ5ZTRlMWM2MmExMjk2NTBhMjI4ZDhhODNhMWJhNDgzY2ZmMmYwYjgzYWU2MjBi',
        stock: 7,
        description: 'Descripción de Lenovo ThinkPad X1 Carbon'
    }
    

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
    setTimeout(() => {
        resolve (products.find(prod => prod.id === productId))
    }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === category))
      }, 500)
    })
  }