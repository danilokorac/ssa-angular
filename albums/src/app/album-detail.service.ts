import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/models/album';
import { AlbumDetail } from 'src/models/album-detail';


@Injectable({
  providedIn: 'root'
})
export class AlbumDetailService {

  constructor(private httpClient: HttpClient) { }

  getAlbumWithId(albumId: number): Observable<AlbumDetail[]> {
    return this.httpClient.get<AlbumDetail[]>('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId);
  }
}
