import {Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './services/app.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date', 'commit', 'actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.appService.getCommits().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }

  goToEdit(sha: string) {
    console.log(sha);
  }

}
