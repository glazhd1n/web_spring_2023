import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.album = {} as Album;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      console.log(id);
      this.albumService.getOneAlbum(id).subscribe((album) => {
        this.album = album;
      });
    })
  }

}
