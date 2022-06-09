import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/utils/constant';
import { productList } from 'src/dummy/data'

@Injectable(
    { providedIn: 'root' }
)
export class UploadService {
    constructor(private http: HttpClient) { }
    upload = (file: File) => {
        const data = new FormData()
        data.append('file', file);
        return this.http.post(`${API_URL}upload`, data)
    }
}