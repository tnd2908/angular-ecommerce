import { Injectable } from '@angular/core';

@Injectable(
    { providedIn: 'root' }
)
export class CategoryService {
    getCategoryList = () => {
        return [
            {
                name: 'Điện thoại',
                icon: 'https://cdn-icons-png.flaticon.com/512/15/15874.png',
            },
            {
                name: 'Tablet',
                icon: 'https://cdn-icons-png.flaticon.com/512/114/114703.png',
            },
            {
                name: 'Laptop',
                icon: 'https://cdn-icons-png.flaticon.com/512/482/482469.png',
            },
            {
                name: 'Đồng hồ',
                icon: 'https://cdn-icons-png.flaticon.com/512/916/916337.png',
            },
            {
                name: 'Tai nghe',
                icon: 'https://cdn-icons-png.flaticon.com/512/2238/2238074.png',
            },
            {
                name: 'Máy cũ',
                icon: 'https://cdn-icons-png.flaticon.com/512/6398/6398259.png',
            },
            {
                name: 'Màn hình',
                icon: 'https://cdn-icons-png.flaticon.com/512/3474/3474360.png',
            },
            {
                name: 'USB',
                icon: 'https://cdn-icons-png.flaticon.com/512/917/917147.png',
            },
            {
                name: 'Dây sạc',
                icon: 'https://cdn-icons-png.flaticon.com/512/640/640348.png',
            },
            {
                name: 'Loa',
                icon: 'https://cdn-icons-png.flaticon.com/512/860/860330.png',
            },
        ]
    }
}