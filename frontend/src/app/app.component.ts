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
  user: any = {};
  displayedColumns: string[] = ['name', 'date', 'commit', 'actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    const user = localStorage.getItem('user');
    if (!user) {
      this.getUser();
    }
    this.getCommits();
  }

  getUser(): void {
    this.appService.getUser().subscribe((response: any) => {
      this.user = response;
      localStorage.setItem('user', JSON.stringify(this.user));
    });
  }

  getCommits(): void {
    this.appService.getCommits().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(this.dataSource.data);
    });
  }

  goToEdit(sha: string) {
    console.log(sha);
  }

}
