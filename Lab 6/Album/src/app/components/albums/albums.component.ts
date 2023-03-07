import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "../../services/albums.service";
import {Album} from "../../models/album";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent{

  albums: Album[] = [];
  error = false

  constructor(private albums_service: AlbumsService) {
    this.albums_service.get_all_albums().subscribe(albums => {
      this.albums = albums;
    }, error => {
      this.error = true
    });
  }

}
