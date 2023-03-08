import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "../../services/albums.service";
import {Album} from "../../models/album";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[];

  constructor(private albumsService: AlbumsService) {
    this.albums = [];
  }

  ngOnInit(): void {
    this.albumsService.getAllAlbums().subscribe((albums: Album[]) => {
      this.albums = albums;
    });
  }


  deleteAlbum(id: number, index: number){
    this.albumsService.deleteAlbum(id).subscribe( _=> {
      this.albums.splice(index, 1);
    });
  }

}
