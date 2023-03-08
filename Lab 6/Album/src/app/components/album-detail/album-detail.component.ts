import {Component, OnInit} from '@angular/core';
import {Album} from "../../models/album";
import {AlbumsService} from "../../services/albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: Album;
  toEdit: boolean;

  constructor(private albumsService: AlbumsService, private router: ActivatedRoute) {
    this.album = {} as Album;
    this.toEdit = false;
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {

      this.albumsService.getAlbumById(parseInt(<string>params.get('id') ) ).subscribe(album => {

        this.album = album;

      });

    });
  }



  updateAlbum(){
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe(_ => {
      console.log(this.album.title)
    })
  }

}
