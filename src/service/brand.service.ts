import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrandService {
  getBrandList = () => {
    return [
      {
        _id: '1',
        name: 'Apple',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png',
      },
      {
        _id: '2',
        name: 'Samsung',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png',
      },
      {
        _id: '3',
        name: 'Oppo',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/OPPO_LOGO_2019.png',
      },
      {
        _id: '4',
        name: 'Asus',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/ASUS_Corporate_Logo.svg/2560px-ASUS_Corporate_Logo.svg.png',
      },
      {
        _id: '5',
        name: 'Huawei',
        logo: 'https://blog.huawei.com/wp-content/uploads/2018/08/2018e585ace58fb8logo-e7ab96e78988.png',
      },
      {
        _id: '6',
        name: 'Nokia',
        logo: 'https://brandlogos.net/wp-content/uploads/2015/03/nokia-logo.png',
      },
      {
        _id: '7',
        name: 'Xiaomi',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png',
      },
      {
        _id: '8',
        name: 'Dell',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2048px-Dell_logo_2016.svg.png',
      },
    ];
  };

  getBrandDetail = (id: string) => {
    return this.getBrandList().find((item) => item._id === id);
  };
}
