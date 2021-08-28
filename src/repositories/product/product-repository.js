const data = [
  {
    id: '1',
    tag: 'Laptop', // select
    name: 'Mac intel 8GB',
    serialNumber: '1259018724098',
    acquisitionDate: '2020-12-01',
    supplier: 'Mac-online',
    invoice: '1255',
    warrantyExpirationDate: '2021-12-01',
    value: {
      amount: 1500000,
      currency: 'CLP'
    },
    user: { // select
      name: 'Marco Galindo',
      id: '11234'
    },
    assignmentDate: '2020-12-01',
    condition: 'new', // select
    state: 'assigned'
  },
  {
    id: '2',
    tag: 'laptop',
    name: 'Mac intel 8GB',
    serialNumber: '1259018724098',
    acquisitionDate: '2020-12-01',
    supplier: 'mac-online',
    invoice: '1255',
    warrantyExpirationDate: '2021-12-01',
    value: {
      amount: 1500000,
      currency: 'CLP'
    },
    user: {
      name: 'Alejandro Melo',
      id: '11234'
    },
    assignmentDate: '2020-12-01',
    condition: 'new',
    state: 'assigned'
  }
]

const ProductRepository = {
  getAll: async () => {
    const result = data
    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500)
    })
  },
  save: async (product) => {
    if (product.id) {
      data.splice(+product.id - 1, 1, product)
    }
    else { data.push({ ...product, id: (data.length + 1).toString() }) }
    return new Promise((resolve) => {
      setTimeout(() => resolve(0), 500)
    })
  },
  getById: async (id) => {
    const result = data.find(item => item.id === id)
    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500)
    })
  },
  getByUserId: (id) => {
    const result = data.filter(item => item.user?.id === id)
    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500)
    })
  }
}

export default ProductRepository