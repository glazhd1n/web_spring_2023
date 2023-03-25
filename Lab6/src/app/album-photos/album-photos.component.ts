import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos: Album[];

  constructor(
    private router: ActivatedRoute,
    private albumService: AlbumService
  ) {
    this.photos = [];
  }

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.albumService.getPhotos(id).subscribe((photos) => {
        this.photos = photos;
      })
    })
  }
}
