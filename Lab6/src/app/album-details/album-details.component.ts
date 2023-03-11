import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;
  url: string;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.album = {} as Album;
    this.url = '';
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      console.log(id);
      this.albumService.getOneAlbum(id).subscribe((album) => {
        this.album = album;
        this.url = ``
      });
    })
  }

}
