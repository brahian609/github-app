import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './services/app.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { User } from './models';
import { Commit } from './models';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  user: User;
  displayedColumns: string[] = ['name', 'date', 'commit', 'actions'];
  dataSource = new MatTableDataSource<Commit>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private appService: AppService) {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    const user = localStorage.getItem('user');
    if (!user) {
      this.getUser();
    } else {
      this.user = JSON.parse(user);
    }
    this.getCommits();
  }

  getUser(): void {
    this.appService.getUser().subscribe((response: User) => {
      this.user = response;
      localStorage.setItem('user', JSON.stringify(this.user));
    });
  }

  getCommits(): void {
    this.appService.getCommits().subscribe((response: Commit[]) => {
      this.dataSource.data = response;
    });
  }

  goToEdit(sha: string) {
    console.log(sha);
  }

}
