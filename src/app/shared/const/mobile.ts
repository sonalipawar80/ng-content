import { Imobile } from "../modals/mobile";

export let mobileProducts: Array<Imobile> = [
    {
      id: 1,
      name: 'iPhone 13',
      brand: 'Apple',
      discount: 899, // Discounted price
      originalPrice: 999, // Original price
      image: 'https://i.insider.com/6116b065c040ad0018ce3ea1?width=1009&format=jpeg',
      isAvailable: true,
      rating: 4.9,
      noOfItems: 50,
      specifications: [
        '6.1-inch display',
        'A15 Bionic chip',
        'Dual 12MP camera system',
        'Face ID',
        '5G capable',
        'Up to 512GB storage'
      ]
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      brand: 'Samsung',
      discount: 799,
      originalPrice: 899,
      image: '',
      isAvailable: false,
      rating: 4.5,
      noOfItems: 20,
      specifications: [
        '6.2-inch display',
        'Exynos 2100 chip',
        'Triple 12MP camera system',
        'Fingerprint scanner',
        '5G capable',
        'Up to 256GB storage'
      ]
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      brand: 'Google',
      discount: 699,
      originalPrice: 799,
      image: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios16-iphone13-pro-widgets-home-screen.png',
      isAvailable: false,
      rating: 3.9,
      noOfItems: 0,
      specifications: [
        '6.4-inch display',
        'Google Tensor chip',
        'Dual 50MP camera system',
        'Fingerprint scanner',
        '5G capable',
        'Up to 256GB storage'
      ]
    },
    {
      id: 4,
      name: 'OnePlus 9 Pro',
      brand: 'OnePlus',
      discount: 799,
      originalPrice: 899,
      image: '',
      isAvailable: true,
      rating: 2.9,
      noOfItems: 7,
      specifications: [
        '6.7-inch display',
        'Snapdragon 888 chip',
        'Quad 48MP camera system',
        'In-display fingerprint scanner',
        '5G capable',
        'Up to 256GB storage'
      ]
    },
    {
      id: 5,
      name: 'Xiaomi Mi 11',
      brand: 'Xiaomi',
      discount: 649,
      originalPrice: 699,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
      isAvailable: true,
      rating: 4.8,
      noOfItems: 5,
      specifications: [
        '6.81-inch display',
        'Snapdragon 888 chip',
        'Triple 108MP camera system',
        'In-display fingerprint scanner',
        '5G capable',
        'Up to 256GB storage'
      ]
    },
    {
      id: 6,
      name: 'Sony Xperia 1 III',
      brand: 'Sony',
      discount: 1099,
      originalPrice: 1199,
      image: '',
      isAvailable: true,
      rating: 2.5,
      noOfItems: 100,
      specifications: [
        '6.5-inch display',
        'Snapdragon 888 chip',
        'Triple 12MP camera system',
        'Side-mounted fingerprint scanner',
        '5G capable',
        'Up to 512GB storage'
      ]
    },
    {
      id: 7,
      name: 'LG Velvet',
      brand: 'LG',
      discount: 549,
      originalPrice: 599,
      image: '',
      isAvailable: false,
      rating: 1.5,
      noOfItems: 2,
      specifications: [
        '6.8-inch display',
        'Snapdragon 765G chip',
        'Triple 48MP camera system',
        'In-display fingerprint scanner',
        '5G capable',
        'Up to 128GB storage'
      ]
    },
    {
      id: 8,
      name: 'Huawei P40 Pro',
      brand: 'Huawei',
      discount: 799,
      originalPrice: 899,
      image: '',
      isAvailable: true,
      rating: 3.5,
      noOfItems: 0,
      specifications: [
        '6.58-inch display',
        'Kirin 990 chip',
        'Quad 50MP camera system',
        'In-display fingerprint scanner',
        '5G capable',
        'Up to 512GB storage'
      ]
    },
    {
      id: 9,
      name: 'Motorola Moto G Power',
      brand: 'Motorola',
      discount: 229,
      originalPrice: 249,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
      isAvailable: true,
      rating: 4.5,
      noOfItems: 500,
      specifications: [
        '6.6-inch display',
        'Snapdragon 662 chip',
        'Triple 48MP camera system',
        'Fingerprint scanner',
        '4G LTE',
        'Up to 64GB storage'
      ]
    },
    {
      id: 10,
      name: 'Nokia 8.3',
      brand: 'Nokia',
      discount: 449,
      originalPrice: 499,
      image: '',
      isAvailable: true,
      rating: 4.5,
      noOfItems: 8,
      specifications: [
        '6.81-inch display',
        'Snapdragon 765G chip',
        'Quad 64MP camera system',
        'Side-mounted fingerprint scanner',
        '5G capable',
        'Up to 128GB storage'
      ]
    }
  ];