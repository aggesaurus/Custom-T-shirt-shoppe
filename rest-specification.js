let api = [
    {
      description: 'As a user I want to be able to add text to my t-shirt', //US5
      request:{
        method: 'get',
        url: 'localhost:3000/rest/customize/:id',
        params: ['id']
      },
      response:{
        content:{
          id: Number,
          font_theme: Char,
          font_color: Char,
          font_size: Char,
          font_style: Char
        }
      }
    },
    {
      description: 'As a user I want to be able to order my t-shirt', // US8
      request:{
        method: 'get',
        url: 'localhost:3000/rest/order'
        //params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          order_number: Vachar,
          price: Integer,
          amount: Interger,
          dis_code: Vachar
          }
        ]
      }
    },
    {
      description: 'As a user I want to be able to get a confirmation of my order', //US10
      request:{
        method: 'get',
        url: 'localhost:3000/rest/order_confirmation',
        //params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          cust_name: Char,
          order_number: Vachar,
          price: Integer,
          payment_method: char,
          product_name: Char,
          cust_address: Char,
          quantity: Integer
        }
      ]
    }
  },    
  {
    description: 'As a user I want to be able to upload a picture for my t-shirt', //US11
      request:{
        method: 'get',
        url: 'localhost:3000/rest/product/5',
        //params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          size: Char,
          color: Char,
          material: Char,
          model: char,
          image: jpg,
          product_name: Char
          }
      ]
    }
  },
  {
    description: 'As a user I want to be able to use a discount code', //US24
      request:{
        method: 'get',
        url: 'localhost:3000/rest/order/4',
        //params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          order_number: Vachar,
          price: Integer,
          amount: Interger,
          dis_code: Vachar
          }
      ]
    }
  },
  {
    description: 'As a user I want to be able to choose the amount of t-shirts', //US12
      request:{
        method: 'get',
        url: 'localhost:3000/rest/order/3',
        //params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          order_number: Vachar,
          price: Integer,
          amount: Interger,
          dis_code: Vachar
          }
      ]
    }
  },
  {
    description: 'As a user I want to be able to change font size of the text on my t-shirt', //US13
    request:{
      method: 'get',
      url: 'localhost:3000/rest/customize/3',
      //params: ['id']
    },
    response:{
      content:{
        id: Number,
        font_theme: Char,
        font_color: Char,
        font_size: Char,
        font_style: Char
      }
    }
  },
  {
    description: 'As a user I want to be able to change the text color', //US14
    request:{
      method: 'get',
      url: 'localhost:3000/rest/customize/2',
      //params: ['id']
    },
    response:{
      content:{
        id: Number,
        font_theme: Char,
        font_color: Char,
        font_size: Char,
        font_style: Char
      }
    }
  },
  {
    description: 'As a user I want to be able to choose any model from the t-shirt selections', //US20
      request:{
        method: 'get',
        url: 'localhost:3000/rest/product/4',
        //params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          size: Char,
          color: Char,
          material: Char,
          model: char,
          image: jpg,
          product_name: Char
          }
      ]
    }
  },
  {
    description: 'As a user I want to be able to do invoice payment', //US21
      request:{
        method: 'get',
        url: 'localhost:3000/rest/payment_method/2',
        //params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          card: Char,
          invoice: Char,
          direct: Char,
          swish: char,
          present_card: Char,
          paypal: Char
          }
      ]
    }
  },
  {
    description: ' As a user I want to be able to pay with card', //US22
      request:{
        method: 'get',
        url: 'localhost:3000/rest/payment_method/1',
        //params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          card: Char,
          invoice: Char,
          direct: Char,
          swish: char,
          present_card: Char,
          paypal: Char
          }
      ]
    }
  },
  {
    description: 'As a user I want to be able to choose any payment options', //US23
      request:{
        method: 'get',
        url: 'localhost:3000/rest/payment_method',
        //params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          card: Char,
          invoice: Char,
          direct: Char,
          swish: char,
          present_card: Char,
          paypal: Char
          }
      ]
    }
  },
  {
    description: 'As a user I want to be able to choose a material of my t-shirt', //US25
      request:{
        method: 'get',
        url: 'localhost:3000/rest/product/3',
        //params: ['id']
      },
      response:{
        content:[
          {
          id: Number,
          size: Char,
          color: Char,
          material: Char,
          model: char,
          image: jpg,
          product_name: Char
          }
      ]
    }
  }