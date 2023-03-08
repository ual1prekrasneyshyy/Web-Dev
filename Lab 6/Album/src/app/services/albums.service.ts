import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "../models/album";
import {Photo} from "../models/photo";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  public get_all_albums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  public get_album_by_id(album_id: number): Observable<Album> {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${album_id}`);
  }

  public get_photos_by_album_id(album_id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${album_id}/photos`);
  }
}
