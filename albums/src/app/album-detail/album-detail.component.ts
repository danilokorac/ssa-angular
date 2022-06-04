import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumDetail } from 'src/models/album-detail';
import { AlbumDetailService } from '../album-detail.service';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  albumDetails ?: AlbumDetail[];
  constructor(private albumDetailService: AlbumDetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('albumId'));
    this.getAlbumWithId(albumId);
  }

  getAlbumWithId(albumId: number) {
    this.albumDetailService.getAlbumWithId(albumId).subscribe(resp => this.albumDetails = resp);
  }

}
