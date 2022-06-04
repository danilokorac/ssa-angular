import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Album } from 'src/models/album';
import { AlbumsService } from '../albums.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums ?: Album[];
  constructor(private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums()
  }

  getAlbums(){
    this.albumService.getUsers().subscribe(resp => this.albums = resp);
  }

}
