import {Component, OnInit} from '@angular/core';
import { Album } from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  constructor(private albumService: AlbumService) {
    this.albums = [];
  }

  ngOnInit() {
    this.albumService.getAlbum().subscribe((albums) => {
      this.albums = albums;
    });
  }
}
