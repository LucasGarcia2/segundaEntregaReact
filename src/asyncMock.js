const products = [
    {
        id: '1',
        name: 'Iphone12',
        price: 1000,
        category: 'telefonos',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung Galaxy S21',
        price: 900,
        category: 'telefonos',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-368338802?$684_547_JPG$',
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
        img: 'https://images.samsung.com/is/image/samsung/p6pim/sg/sm-t870nzsaxsp/gallery/sg-galaxy-tab-s7-t870-sm-t870nzsaxsp-frontmysticblack-295478232?$720_576_PNG$',
        stock: 20,
        description: 'Descripción de Samsung Galaxy Tab S7'
    },
    {
        id: '5',
        name: 'iPad Pro',
        price: 1200,
        category: 'tablets',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-spacegray-202103_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1617129158000',
        stock: 5,
        description: 'Descripción de iPad Pro'
    },
    {
        id: '6',
        name: 'Macbook Pro',
        price: 2000,
        category: 'notebooks',
        img: 'https://www.apple.com/v/macbook-pro-13/p/images/overview/hero_endframe__dvsq0xsm470u_large_2x.jpg',
        stock: 10,
        description: 'Descripción de Macbook Pro'
    },
    {
        id: '7',
        name: 'Lenovo ThinkPad X1 Carbon',
        price: 1500,
        category: 'notebooks',
        img: 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-9-gen-hero.png?context=bWFzdGVyfHJvb3R8MTA5MDU0fGltYWdlL3BuZ3xoYmMvaDdhL2g5Yi85NzA0NzQ2ODcwNjA0LnBuZ3w4YmE4Y2NiOGUwY2QxMzE0MmU1YzIxZTMxNDliNmNkMjcyOTY5MjY5YzllZmU2ZjQ2NzU1ZjU2NTZlZWQyYWEw',
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