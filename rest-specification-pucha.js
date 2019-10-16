let api = [
    {
      description: 'Get all informations about the users ',
      request:{
        method: 'get',
        url: '/rest/users',
      },
      response:{
        content:{
          id: Number,
          first_name: String,
          last_name: String,
          email: String,
          password: String,
          address: String
        }
      }
    },
    {
      description: 'Create one product',
      request:{
        method: 'post',
        url: '/rest/products',
        body:{
          name: String,
          price: String,
          size: String,
          color: String,
          material: String,
          model: String
        }
      },
      response:{
        statusCode: Number,
        error: Object
      }
    },
    {
      description: 'Get all informations about the products',
      request:{
        method: 'get',
        url: '/rest/products'
      },
      response:{
        content:[
          {
          id: Number,
          name: String,
          price: String,
          size: String,
          color: String,
          material: String,
          model: String
          }
        ]
      }
    },
    {
      description: 'Create one order',
      request:{
        method: 'post',
        url: '/rest/orders',
        body:{
          user_id: Number,
          packaged: String,
          sent: String,
          delivered: String
        }
      },
      response:{
        statusCode: Number,
        error: Object
      }
    },
    {
      description: 'Get all informations about the orders',
      request:{
        method: 'get',
        url: '/rest/orders'
      },
      response:{
        content:[
          {
          id: Number,
          user_id: Number,
          packaged: String,
          sent: String,
          delivered: String
          }
        ]
      }
    },
    {
      description: 'Create one order row',
      request:{
        method: 'post',
        url: '/rest/order_row',
        body:{
          users_id: Number,
          products_id: Number,
          quantity: Number,
          text: String,
          image: String
        }
      },
      response:{
        statusCode: Number,
        error: Object
      }
    },
    {
      description: 'Get all informations about the order row',
      request:{
        method: 'get',
        url: '/rest/order_row'
      },
      response:{
        content:[
          {
          id: Number,
          users_id: Number,
          products_id: Number,
          quantity: Number,
          text: String,
          image: String
          }
        ]
      }
    },
  ]