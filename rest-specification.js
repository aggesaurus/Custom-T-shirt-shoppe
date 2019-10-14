let api = [
    {
      description: 'Get all customize font', //US5
      request:{
        method: 'get',
        url: 'localhost:3000/rest/customize/:id',
        params: ['id']
      },
      response:{
        content:[
        {
          id: Number,
          font_theme: String,
          font_color: String,
          font_size: Number,
          font_style: String
        }
      ]
      }
    },
    {
      description: 'Get all order information', // US8
      request:{
        method: 'get',
        url: 'localhost:3000/rest/order'
      },
      response:{
        content:[
          {
          id: Number,
          order_number: Number,
          price: Number,
          amount: Number,
          dis_code: String
          }
        ]
      }
    },
    {
      description: 'Create order confirmation information',  //US10
      request:{
        method: 'post',
        url: 'localhost:3000/rest/order_confirmation',
        body:{
          cust_name: String,
          order_number: Number,
          price: Number,
          payment_method: String,
          product_name: String,
          cust_address: String,
          quantity: Number
        }
      },
      response:{
        statusCode: Number,
        error: Object
      }
    },   
    {
      description: 'Get all order confirmation information', //US10
      request:{
        method: 'get',
        url: 'localhost:3000/rest/order_confirmation'
      },
      response:{
        content:[
          {
          id: Number,
          cust_name: String,
          order_number: Number,
          price: Number,
          payment_method: String,
          product_name: String,
          cust_address: String,
          quantity: Number
        }
      ]
    }
  },    
  {
    description: 'Add product image',  //US11
    request:{
      method: 'post',
      url: 'localhost:3000/rest/product',
      body:{
        image: String
      }
    },
    response:{
      statusCode: Number,
      error: Object
    }
  },
  {
    description: 'Get a product image', //US11
      request:{
        method: 'get',
        url: 'localhost:3000/rest/product/5',
        params: ['id']
      },
      response:{
        content:
          {
          id: Number,
          image: String
          }
    }
  },
  {
    description: 'Get the discount codes', //US24
      request:{
        method: 'get',
        url: 'localhost:3000/rest/order/4',
        params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          dis_code: String
          }
      ]
    }
  },
  {
    description: 'Get the amount of t-shirts', //US12
      request:{
        method: 'get',
        url: 'localhost:3000/rest/order/3',
        params: ['id']
      },
      response:{
        content:
          {
          id: Number,
          amount: Number,
          }
    }
  },
  {
    description: 'Get the font sizes', //US13
    request:{
      method: 'get',
      url: 'localhost:3000/rest/customize/3',
      params: ['id']
    },
    response:{
      content:[
      {
        id: Number,
        font_size: Number,
      }
    ]
    }
  },
  {
    description: 'Get the font colors', //US14
    request:{
      method: 'get',
      url: 'localhost:3000/rest/customize/2',
      params: ['id']
    },
    response:{
      content:[
      {
        id: Number,
        font_color: String
      }
    ]
    }
  },
  {
    description: 'Get t-shirt model', //US20
      request:{
        method: 'get',
        url: 'localhost:3000/rest/product/4',
        params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          model: String
          }
      ]
    }
  },
  {
    description: 'Get the invoice payment', //US21
      request:{
        method: 'get',
        url: 'localhost:3000/rest/payment_method/2',
        params: ['id']
      },
      response:{
        content:{
          id: Number,
          invoice: String
          }
    }
  },
  {
    description: 'Get the card payment', //US22
      request:{
        method: 'get',
        url: 'localhost:3000/rest/payment_method/1',
        params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          card: String
          }
      ]
    }
  },
  {
    description: 'Get all the payment options', //US23
      request:{
        method: 'get',
        url: 'localhost:3000/rest/payment_method'
      },
      response:{
        content:[
          {
          id: Number,
          card: String,
          invoice: String,
          direct: String,
          swish: String,
          present_card: String,
          paypal: String
          }
      ]
    }
  },
  {
    description: 'Get t-shirt materials', //US25
      request:{
        method: 'get',
        url: 'localhost:3000/rest/product/3',
        params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          material: String
          }
      ]
    }
  }
]