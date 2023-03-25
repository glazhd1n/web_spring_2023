import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) { }

  getAlbum(): Observable<Album[]> {
    return this.client.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
  };

  getOneAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }

  getPhotos(id: number): Observable<Album[]> {
    return this.client.get<Album[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
}
